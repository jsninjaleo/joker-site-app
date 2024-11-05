interface SymbolProps {
    color: string;
}

export const Symbol: React.FC<SymbolProps> = (props) => {
    return (
        <svg
            className={`stroke-current text-${props.color} hover:text-white cursor-pointer`}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 18L18 6M18 6H10M18 6V14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
