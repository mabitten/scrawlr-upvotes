type CardFillProps = {
    title: string;
    children: React.ReactNode;
};

const CardFill: React.FC<CardFillProps> = ({ title, children }) => {
    return (
        <section className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            {children}
        </section>
    );
};

export default CardFill; 