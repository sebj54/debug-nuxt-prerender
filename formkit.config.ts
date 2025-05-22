import { defineFormKitConfig } from '@formkit/vue'

export default defineFormKitConfig(() => {
    return {
        async iconLoader(iconName: string) {
            try {
                return (await import(`~/node_modules/bootstrap-icons/icons/${iconName}.svg`)).default
            }
            catch {
                return iconName
            }
        },
    }
})
