import { app, ipcMain } from 'electron'

ipcMain.handle('fetch-users', () => {
  console.log('Buscando usuários...')

  return [
    { id: 1, nome: 'Matheus' },
    { id: 2, nome: 'Lucas' },
    { id: 3, nome: 'Ana' }
  ]
})

ipcMain.handle('get-version', () => {
  return app.getVersion()
})
