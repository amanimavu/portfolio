// fix: gatsby typescript error cannot find module img.jpg or its corresponding type declarations
declare module "*.jpg" {
    export default "" as string
}
declare module "*.png" {
    export default "" as string
}

declare module "*.css"

declare module "worker-loader!*" {
    // You need to change `Worker`, if you specified a different value for the `workerType` option
    class WebpackWorker extends Worker {
        constructor()
    }

    // Uncomment this if you set the `esModule` option to `false`
    // export = WebpackWorker;
    export default WebpackWorker
}

// fix typescript error of not being able to import svgs has react components
declare module "*.svg" {
    import React = require("react")
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    const src: string
    export default src
}
