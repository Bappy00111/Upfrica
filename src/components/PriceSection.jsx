const PriceSection = ({ price }) => (
    <div>
      <p className="text-base font-bold">Price: <span className="text-xl">${price.cents}</span> each</p>
      <p className="text-gray-600">RRP <span className="line-through">${price.cents}</span> You Save: $6.39 (3%)</p>
    </div>
  );

  export default PriceSection;