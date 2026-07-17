import { useState } from "react";
import { MessageCircle } from "lucide-react";

import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Card from "../components/common/Card";
import PageLayout from "../components/layout/PageLayout";

interface JoinRoomPageProps {
  onJoin: (username: string, room: string) => void;
}



function JoinRoomPage({ onJoin }: JoinRoomPageProps) {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    room: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();


    const newErrors = {
      username: "",
      room: "",
    };


    if (!username.trim()) {
      newErrors.username = "Username is required";
    }


    if (!room.trim()) {
      newErrors.room = "Room name is required";
    }


    setErrors(newErrors);


    if (
      newErrors.username ||
      newErrors.room
    ) {
      return;
    }


    setLoading(true);


    console.log(
      "[Analytics] User interacted with Real-Time Chat Support"
    );


    console.log(
      "[Analytics] User interacted with Real-Time Chat Support"
    );

    onJoin(
      username.trim(),
      room.trim()
    );

  }
  return (

    <PageLayout>

      <Card>

        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">

            <MessageCircle size={28}/>

          </div>


          <h1 className="text-3xl font-bold tracking-tight">
            Real-Time Chat
          </h1>


          <p className="mt-3 text-sm text-neutral-500">
            Electronics Repair Support
          </p>

        </div>



        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <Input
            aria-label="Username"
            placeholder="Enter your username"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            error={errors.username}
          />


          <Input
            aria-label="Room name"
            placeholder="Enter support room"
            value={room}
            type="text"
            onChange={(e)=>setRoom(e.target.value)}
            error={errors.room}
          />



          <Button
            type="submit"
            loading={loading}
          >
            Join Conversation
          </Button>


        </form>


      </Card>


    </PageLayout>

  );
}


export default JoinRoomPage;