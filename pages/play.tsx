import React from 'react'
import { useAccount } from 'wagmi'
import TextCircle from "./../components/textCircle"

function Play() {
    const { address, isConnecting, isDisconnected } = useAccount()

    if (isConnecting) console.log("Detecteing Lens Profile")
    if (isDisconnected) console.log("lens profile detected")

    console.log(address);

    return (
        // <div className="flex flex-col items-center justify-center h-5/6 border-2 border-gray-800">
        //     play game here
        <div className="flex flex-col lg:flex-row lg:max-w-5xl w-full lg:mb-0 lg:grid-cols-2 items-center justify-center border-2 border-blue-800 my-32 gap-10 lg:gap-20">
            {/* <div>{address}</div> */}
            <div className="relative group rounded-lg border border-transparent px-5 py-4 border-gray-300 dark:border-neutral-700 dark:bg-neutral-800/30 h-96 w-64">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    player 1
                </h2>
                <TextCircle />
            </div>

            <div className="group rounded-lg border border-transparent px-5 py-4 border-gray-300 dark:border-neutral-700 dark:bg-neutral-800/30 h-96 w-64">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Player 2
                </h2>
            </div>
        </div>
        // </div>
    )
}

export default Play