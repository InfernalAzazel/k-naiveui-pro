import type { Plugin } from 'vue'
import * as allImport from './components';


const components = Object.values(allImport).filter(
    (component: any) => component && component.name
);

const install: Plugin = {
    install(app) {
        components.forEach(component => {
            app.component(component.name, component);
        });
    },
};

export * from './components'
export default install