interface TypingIndicatorProps {
  username: string;
}

function TypingIndicator({
  username,
}: TypingIndicatorProps) {

  if (!username) {
    return null;
  }

  return (
    <div className="px-6 pb-4 text-sm italic text-neutral-500 animate-pulse">
      {username} is typing...
    </div>
  );
}

export default TypingIndicator;