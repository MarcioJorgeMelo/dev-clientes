import { app, ipcMain } from 'electron'
import PouchDB from 'pouchdb'
import path from 'node:path'
import fs from 'node:fs'
import { randomUUID } from 'node:crypto'
import { Customer, newCustomer } from '../shared/types/ipc'

let dbPath
if (process.platform === 'darwin') {
  dbPath = path.join(app.getPath('appData'), 'dev-clientes', 'my_db')
} else {
  dbPath = path.join(app.getPath('userData'), 'my_db')
}

const dbDir = path.dirname(dbPath)
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}

const db = new PouchDB<Customer>(dbPath)

async function addCustomer(doc: newCustomer): Promise<PouchDB.Core.Response | void> {
  const id = randomUUID()

  const data: Customer = {
    ...doc,
    _id: id
  }

  return db
    .put(data)
    .then((response) => response)
    .catch((err) => console.log('Erro ao cadastrar', err))
}

ipcMain.handle('add-customer', async (event, doc: Customer) => {
  const result = await addCustomer(doc)

  return result
})
