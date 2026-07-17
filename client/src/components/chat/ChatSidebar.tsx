import type { User } from "../../types/socket";

interface ChatSidebarProps {
  users: User[];
}

function ChatSidebar({
  users,
}: ChatSidebarProps) {

  return (

    <aside className="w-72 border-r border-neutral-200 bg-neutral-50">

      <div className="border-b border-neutral-200 p-5">

        <h2 className="font-bold">
          Online Users
        </h2>

        <p className="mt-1 text-sm text-neutral-500">
          {users.length} connected
        </p>

      </div>

      <div className="overflow-y-auto p-4">

        {
          users.length === 0 ? (

            <p className="text-neutral-400">
              No users online
            </p>

          ) : (

            users.map((user) => (

              <div
                key={user.socketId}
                className="mb-3 flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
              >

                <span className="h-3 w-3 rounded-full bg-green-500"/>

                <span className="font-medium">
                  {user.username}
                </span>

              </div>

            ))

          )
        }

      </div>

    </aside>

  );

}

export default ChatSidebar;