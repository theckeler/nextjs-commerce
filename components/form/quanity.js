export default function FormQuanity({ quantity }) {
  return (
    <div className="flex items-center">
      <button type="button" className="h-12 w-12 bg-gray-200 leading-10 text-gray-600">
        −
      </button>
      <input
        type="number"
        //id="Quantity"
        defaultValue={quantity}
        className="h-12 w-10 border border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button type="button" className="h-12 w-12 bg-gray-200 leading-10 text-gray-600">
        +
      </button>
    </div>
  );
}
