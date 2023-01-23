import Image from "next/image";
import fonts from "@/libs/font";

const UserCommentCardComponent = ({ user, address, avatar, comment, font }) => {
  const { jost } = fonts;
  return (
    <div className="text-left p-10 bg-white rounded-2xl">
      <div className="flex items-center">
        <div className="relative bg-white w-16 h-16 rounded-full">
          <Image src="/user-potrait.jpeg" alt="Photo" fill className="rounded-full" />
        </div>
        <div className="align-left mx-6">
          <h3 className={`text-lg font-semibold ${jost}`}>{user}</h3>
          <p className={`text-md ${jost}`}>{address}</p>
        </div>
      </div>
      <div className={`text-lg leading-6 py-6 ${jost}`}>
        {comment}
      </div>
    </div>
  )
}

export default UserCommentCardComponent;