import { MessageCircle } from "lucide-react";

import ConnectionBadge from "./ConnectionBadge";

interface Props{
    connected:boolean;
}

function ChatHeader({
    connected,
}:Props){

    return(

        <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4">

            <div className="flex items-center gap-3">

                <div className="rounded-xl bg-black p-3 text-white">

                    <MessageCircle/>

                </div>

                <div>

                    <h1 className="font-bold text-lg">
                        Real-Time Chat Support
                    </h1>

                    <p className="text-sm text-neutral-500">
                        Electronics Repair Shop
                    </p>

                </div>

            </div>

            <ConnectionBadge
                connected={connected}
            />

        </header>

    );

}

export default ChatHeader;