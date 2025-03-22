
type Card = {
  title: string;
    content: string | React.ReactNode;
};

export default function CTACard ({content, title}:Card) {

    return (
        <div className="bg-black/50 border-l-4 border-primary p-6  shadow-sm shadow-primary   backdrop-blur-sm bg-opacity-95 hover:bg-primary-300/40">
        <h2 className="text-xl font-semibold text-primary mb-4">{title}</h2>
        <p className="text-black-900">
          {content}
        </p>
      </div>
    )
}