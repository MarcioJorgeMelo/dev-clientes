import { contextBridge, ipcRenderer } from 'electron'
import { ElectronAPI, electronAPI } from '@electron-toolkit/preload'
import { Customer, newCustomer } from '../shared/types/ipc'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: typeof api
  }
}

// Custom APIs for renderer
const api = {
  onNewCustomer: (callback: () => void) => {
    ipcRenderer.on('new-customer', callback)

    return () => {
      ipcRenderer.off('new-customer', callback)
    }
  },
  fetchUsers: () => {
    return ipcRenderer.invoke('fetch-users')
  },
  addCustomer: (doc: newCustomer): Promise<void | PouchDB.Core.Response> =>
    ipcRenderer.invoke('add-customer', doc),
  fetchAllCustomers: (): Promise<Customer[]> => ipcRenderer.invoke('fetch-all-customers'),
  fetchCustomerById: (docId: string): Promise<Customer> =>
    ipcRenderer.invoke('fetch-customer-id', docId),
  deleteCustomerById: (docId: string) => ipcRenderer.invoke('delete-customer-id', docId),
  getVersionApp: () => ipcRenderer.invoke('get-version')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
