/// <reference types="vite-plugin-svgr/client" />
import LoadingImg from './../assets/infinite-loading.svg?react';
function Loading() {

    return (

        <div className="flex items-center justify-center h-screen">
            <div className="p-4">
                <div className='text-center'>
                    <div className='loading-wrap inline-block'>
                        <LoadingImg />
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Loading;