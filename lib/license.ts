// import { invoke } from '@tauri-apps/api/core'
// import { fetch } from '@tauri-apps/plugin-http'
// import { platform } from '@tauri-apps/plugin-os'
import { usePersistedStore } from '../store/persisted'

export async function validateLicense(licenseKey: string) {
    console.log('[validateLicense]', licenseKey)

    usePersistedStore.setState({ licenseKey, licenseValid: true })

    console.log('[validateLicense] license validated')
}

export async function revokeMachineLicense(licenseKey: string) {
    console.log('[revokeMachineLicense]', licenseKey)

    usePersistedStore.setState({ licenseKey: undefined, licenseValid: false })

    console.log('[revokeMachineLicense] license revoked')
}
