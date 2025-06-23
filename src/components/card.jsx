const Card = ({ gradient = " from-blue-400 to-purple-500" }) => {
  return (
    <div
      className={`w-full h-48 bg-gradient-to-r ${gradient} rounded-xl mb-6 p-4 text-white`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="text-sm opacity-80">NEVERBANK</div>
        <div className="text-sm opacity-80">VISA</div>
      </div>
      <div className="text-lg font-mono tracking-wider mb-4">
        •••• •••• •••• 1234
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="text-xs opacity-80">VALID THRU</div>
          <div className="text-sm">12/28</div>
        </div>
        <div className="text-right">
          <div className="text-xs opacity-80">CARDHOLDER</div>
          <div className="text-sm">ABC</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
