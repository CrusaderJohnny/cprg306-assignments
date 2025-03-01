export default function Items( { name, quantity, category } ) {
    return (
        <div className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2 ml-5">
        <div className="text-xl font-bold">{name}</div>
        <div>Buy {quantity} in {category}</div>
        </div>
    );
}