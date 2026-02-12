


// export default function PropertyCardRed() {
//   const property = {
//     title: "Vatika The Seven Lamps",
    
//     address: "2 BHK Flat in Sector 82, Gurgaon",
//     price: "1.75 Cr",
//     perSqft: "₹12,195 /sqft",
//     area: "1,435 sqft",
//     type: "2 BHK",
//     status: "Ready To Move",
//     dealer: "Encore Property Management",
//     time: "2w ago",
//     image:
//       "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">

//       <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">

//         {/* LEFT IMAGE SECTION */}
//         <div className="relative md:w-2/5">

//           <img
//             src={property.image}
//             className="w-full h-full object-cover"
//           />

//           {/* TAGS */}
          

//           {/* IMAGE COUNT */}
        

//         </div>

//         {/* RIGHT CONTENT SECTION */}
//         <div className="p-6 flex-1">

//           {/* TITLE ROW */}
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-xl font-bold text-gray-800">
//                 {property.title}
               
//               </h2>

//               <p className="text-gray-600 mt-1">
//                 {property.address}
//               </p>
//             </div>

//             <span className="bg-red-50 text-red-600 px-3 py-1 text-xs font-semibold rounded">
//               RESALE
//             </span>
//           </div>

//           {/* PRICE INFO */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">

//             <div>
//               <p className="text-2xl font-bold text-red-600">
//                 ₹{property.price}
//               </p>
//               <p className="text-sm text-gray-500">
//                 {property.perSqft}
//               </p>
//             </div>

//             <div>
//               <p className="font-semibold text-gray-800">
//                 {property.area}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Carpet Area
//               </p>
//             </div>

//             <div>
//               <p className="font-semibold text-gray-800">
//                 {property.type}
//               </p>
//               <p className="text-sm text-gray-500">
//                 {property.status}
//               </p>
//             </div>

//           </div>

//           {/* DESCRIPTION */}
//           <p className="text-gray-500 text-sm mt-4">
//             Brokers excuse, 2bhk + study, north facing, available for immediate sale...
//           </p>

//           {/* FOOTER SECTION */}
//           <div className="flex flex-col md:flex-row justify-between items-center border-t mt-6 pt-4 gap-4">

            

//             <div className="flex gap-3">

//               <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition">
//                 View Number
//               </button>

//               <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2">
//                 📞 Contact
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }




// export default function PropertyCardRed() {
//   const property = {
//     title: "Vatika The Seven Lamps",
//     address: "2 BHK Flat in Sector 82, Gurgaon",
//     price: "1.75 Cr",
//     perSqft: "₹12,195 /sqft",
//     area: "1,435 sqft",
//     type: "2 BHK",
//     status: "Ready To Move",
//     dealer: "Encore Property Management",

//     image:
//       "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">

//       <div className="max-w-5xl w-full bg-white rounded-xl border shadow-sm overflow-hidden flex flex-col md:flex-row">

//         {/* LEFT IMAGE SECTION */}
//         <div className="relative md:w-2/5 p-3">

//           <div className="relative rounded-lg overflow-hidden">
//             <img
//               src={property.image}
//               className="w-full h-60 object-cover"
//               alt="property"
//             />
//           </div>

//         </div>

//         {/* RIGHT CONTENT SECTION */}
//         <div className="p-5 flex-1">

//           {/* TITLE ROW */}
//           <div className="flex justify-between items-start">
//             <h2 className="text-lg font-semibold text-gray-800">
//               {property.address}
//             </h2>

//             <div className="flex gap-2 text-gray-500">
//               <span className="cursor-pointer hover:text-red-600 transition">
//                 🤍
//               </span>
//               <span className="cursor-pointer hover:text-red-600 transition">
//                 ↗
//               </span>
//             </div>
//           </div>

//           {/* INFO BOX */}
//           <div className="bg-gray-100 rounded-lg p-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">

//             <div className="md:border-r pr-3">
//               <p className="text-gray-500 text-xs">CARPET AREA</p>
//               <p className="font-semibold text-black">{property.area}</p>
//             </div>

//             <div className="md:border-r pr-3">
//               <p className="text-gray-500 text-xs">STATUS</p>
//               <p className="font-semibold text-green-700">
//                 {property.status}
//               </p>
//             </div>

//             <div>
//               <p className="text-gray-500 text-xs">TYPE</p>
//               <p className="font-semibold text-black">{property.type}</p>
//             </div>

//           </div>

//           {/* DESCRIPTION */}
//           <p className="text-sm text-gray-600 mt-4">
//             Brokers excuse, 2bhk + study, north facing, available for immediate sale...
//           </p>

//           {/* PRICE & BUTTONS SECTION */}
//           <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">

//             {/* PRICE */}
//             <div>
//               <p className="text-2xl font-bold text-gray-900">
//                 ₹{property.price}
//               </p>

//               <p className="text-sm text-gray-500">
//                 {property.perSqft}
//               </p>
//             </div>

//             {/* BUTTONS LEFT-RIGHT */}
//             <div className="flex flex-row gap-3 w-full md:w-auto">

//               <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition w-full md:w-auto">
//                 Contact Owner
//               </button>

//               <button className="border border-red-600 text-red-600 px-6 py-2 rounded-full hover:bg-red-50 transition w-full md:w-auto">
//                 Get Phone No.
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }



// export default function PropertyCardRed() {
//   const property = {
//     title: "Vatika The Seven Lamps",
//     address: "2 BHK Flat in Sector 82, Gurgaon",
//     price: "1.75 Cr",
//     perSqft: "₹12,195 /sqft",
//     area: "1,435 sqft",
//     type: "2 BHK",
//     status: "Ready To Move",
//     dealer: "Encore Property Management",

//     image:
//       "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">

//       <div className="max-w-6xl w-full bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col md:flex-row">

//         {/* LEFT IMAGE SECTION */}
//         <div className="relative md:w-2/5">

//           <div className="relative h-full">
//             <img
//               src={property.image}
//               className="w-full h-64 md:h-full object-cover"
//               alt="property"
//             />

//             <div className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full cursor-pointer">
//               →
//             </div>
//           </div>

//         </div>

//         {/* RIGHT CONTENT SECTION */}
//         <div className="p-6 flex-1 flex flex-col justify-between">

//           <div>

//             {/* TAG */}
//             <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mb-3">
//               Zero Brokerage
//             </span>

//             {/* TITLE */}
//             <h2 className="text-xl font-bold text-gray-900">
//               {property.title}
//             </h2>

//             <p className="text-gray-600 mt-1">
//               {property.address}
//             </p>

//             {/* INFO BOX WITH VERTICAL LINES */}
//             <div className="bg-gray-100 rounded-lg p-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 text-sm border-b pb-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">

//               <div className="md:pr-4">
//                 <p className="text-gray-600">{property.type}</p>
//                 <p className="font-bold text-gray-900">
//                   ₹{property.price}
//                 </p>
//               </div>

//               <div className="md:px-4">
//                 <p className="text-gray-600">Carpet Area</p>
//                 <p className="font-bold text-gray-900">
//                   {property.area}
//                 </p>
//               </div>

//               <div className="md:pl-4">
//                 <p className="text-gray-600">Status</p>
//                 <p className="font-bold text-green-700">
//                   {property.status}
//                 </p>
//               </div>

//             </div>

//             {/* EXTRA INFO */}
//             <div className="mt-4 text-sm text-gray-600">
//               Avg. Price: {property.perSqft}
//             </div>

//             {/* DESCRIPTION */}
//             <p className="text-sm text-gray-500 mt-3">
//               Brokers excuse, 2bhk + study, north facing, available for immediate sale...
//             </p>

//           </div>

//           {/* BOTTOM ACTION ROW - RIGHT ALIGNED */}
//           <div className="flex justify-end items-center mt-6">

//             <div className="flex items-center gap-3">

//               <div className="border rounded-lg p-2 cursor-pointer hover:bg-gray-100">
//                 🤍
//               </div>

//               {/* SINGLE BUTTON */}
//               <button className="bg-red-600 text-white px-8 py-2 rounded-lg hover:bg-red-700 transition">
//                 Contact
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }


// export default function PropertyCardGreen() {
//   const property = {
//     title: "Vatika The Seven Lamps",
//     address: "2 BHK Flat in Sector 82, Gurgaon",
//     price: "1.75 Cr",
//     perSqft: "₹12,195 /sqft",
//     area: "1,435 sqft",
//     type: "2 BHK",
//     status: "Ready To Move",
//     dealer: "Encore Property Management",

//     image:
//       "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
//   };

//   return (
//     <div className="min-h-screen bg-green-50 p-6 flex justify-center items-center">

//       <div className="max-w-6xl w-full bg-white rounded-2xl shadow-md border border-green-100 overflow-hidden flex flex-col md:flex-row">

//         {/* LEFT IMAGE SECTION */}
//         <div className="relative md:w-2/5">

//           <div className="relative h-full">
//             <img
//               src={property.image}
//               className="w-full h-64 md:h-full object-cover"
//               alt="property"
//             />

//             <div className="absolute top-1/2 right-3 -translate-y-1/2 bg-green-700/80 text-white p-2 rounded-full cursor-pointer">
//               →
//             </div>
//           </div>

//         </div>

//         {/* RIGHT CONTENT SECTION */}
//         <div className="p-6 flex-1 flex flex-col justify-between">

//           <div>

//             {/* TAG */}
//             <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-3">
//               Zero Brokerage
//             </span>

//             {/* TITLE */}
//             <h2 className="text-xl font-bold text-green-900">
//               {property.title}
//             </h2>

//             <p className="text-gray-600 mt-1">
//               {property.address}
//             </p>

//             {/* INFO BOX WITH VERTICAL LINES */}
//             <div className="bg-green-50 rounded-lg p-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 text-sm border-b pb-4 divide-y md:divide-y-0 md:divide-x divide-green-200">

//               <div className="md:pr-4">
//                 <p className="text-green-700">{property.type}</p>
//                 <p className="font-bold text-gray-900">
//                   ₹{property.price}
//                 </p>
//               </div>

//               <div className="md:px-4">
//                 <p className="text-green-700">Carpet Area</p>
//                 <p className="font-bold text-gray-900">
//                   {property.area}
//                 </p>
//               </div>

//               <div className="md:pl-4">
//                 <p className="text-green-700">Status</p>
//                 <p className="font-bold text-green-800">
//                   {property.status}
//                 </p>
//               </div>

//             </div>

//             {/* EXTRA INFO */}
//             <div className="mt-4 text-sm text-gray-600">
//               Avg. Price: {property.perSqft}
//             </div>

//             {/* DESCRIPTION */}
//             <p className="text-sm text-gray-500 mt-3">
//               Brokers excuse, 2bhk + study, north facing, available for immediate sale...
//             </p>

//           </div>

//           {/* BOTTOM ACTION ROW - RIGHT ALIGNED */}
//           <div className="flex justify-end items-center mt-6">

//             <div className="flex items-center gap-3">

//               <div className="border border-green-300 rounded-lg p-2 cursor-pointer hover:bg-green-50 transition">
//                 🤍
//               </div>

//               {/* SINGLE BUTTON */}
//               <button className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition">
//                 Contact
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }


// export default function PropertyCardGreen() {
//   const property = {
//     title: "Vatika The Seven Lamps",
//     address: "2 BHK Flat in Sector 82, Gurgaon",
//     price: "1.75 Cr",
//     perSqft: "₹12,195 /sqft",
//     area: "1,435 sqft",
//     type: "2 BHK",
//     status: "Ready To Move",
//     dealer: "Encore Property Management",

//     image:
//       "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6 flex justify-center items-center">

//       <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg border border-green-200 overflow-hidden flex flex-col md:flex-row">

//         {/* LEFT IMAGE SECTION */}
//         <div className="relative md:w-2/5">

//           <div className="relative h-full">
//             <img
//               src={property.image}
//               className="w-full h-64 md:h-full object-cover"
//               alt="property"
//             />

//             <div className="absolute top-1/2 right-3 -translate-y-1/2 bg-green-800/80 text-white p-2 rounded-full cursor-pointer hover:bg-green-900 transition">
//               →
//             </div>
//           </div>

//         </div>

//         {/* RIGHT CONTENT SECTION */}
//         <div className="p-6 flex-1 flex flex-col justify-between">

//           <div>

//             {/* TAG */}
//             <span className="inline-block bg-green-100 text-green-900 text-xs px-3 py-1 rounded-full mb-3 font-semibold">
//               Zero Brokerage
//             </span>

//             {/* TITLE */}
//             <h2 className="text-xl font-bold text-green-900">
//               {property.title}
//             </h2>

//             <p className="text-gray-600 mt-1">
//               {property.address}
//             </p>

//             {/* INFO BOX WITH 3 DIFFERENT COLORS */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 text-sm">

//               {/* TYPE BOX */}
//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                 <p className="text-blue-700 font-semibold">Type</p>
//                 <p className="font-bold text-gray-900 mt-1">
//                   {property.type}
//                 </p>
//                 <p className="text-sm text-gray-700 mt-1">
//                   ₹{property.price}
//                 </p>
//               </div>

//               {/* CARPET AREA BOX */}
//               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//                 <p className="text-yellow-700 font-semibold">Carpet Area</p>
//                 <p className="font-bold text-gray-900 mt-1">
//                   {property.area}
//                 </p>
//               </div>

//               {/* STATUS BOX */}
//               <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//                 <p className="text-green-700 font-semibold">Status</p>
//                 <p className="font-bold text-green-800 mt-1">
//                   {property.status}
//                 </p>
//               </div>

//             </div>

//             {/* EXTRA INFO */}
//             <div className="mt-4 text-sm text-gray-600">
//               Avg. Price: {property.perSqft}
//             </div>

//             {/* DESCRIPTION */}
//             <p className="text-sm text-gray-500 mt-3">
//               Brokers excuse, 2bhk + study, north facing, available for immediate sale...
//             </p>

//           </div>

//           {/* BOTTOM ACTION ROW - RIGHT ALIGNED */}
//           <div className="flex justify-end items-center mt-6">

//             <div className="flex items-center gap-3">

//               <div className="border border-green-300 rounded-lg p-2 cursor-pointer hover:bg-green-50 transition">
//                 🤍
//               </div>

//               {/* SINGLE BUTTON */}
//               <button className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition font-semibold">
//                 Contact
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }




// export default function PropertyCardBlue() {
//   const property = {
//     title: "Vatika The Seven Lamps",
//     address: "2 BHK Flat in Sector 82, Gurgaon",
//     price: "1.75 Cr",
//     perSqft: "₹12,195 /sqft",
//     area: "1,435 sqft",
//     type: "2 BHK",
//     status: "Ready To Move",
//     dealer: "Encore Property Management",

//     image:
//       "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex justify-center items-center">

//       <div className="max-w-5xl w-full bg-white rounded-xl border border-blue-100 shadow-md overflow-hidden flex flex-col md:flex-row">

//         {/* LEFT IMAGE SECTION */}
//         <div className="relative md:w-2/5 p-3">

//           <div className="relative rounded-lg overflow-hidden group">
//             <img
//               src={property.image}
//               className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
//               alt="property"
//             />

//             <div className="absolute top-2 right-2 bg-blue-700/80 text-white px-3 py-1 text-xs rounded-full">
//               Featured
//             </div>
//           </div>

//         </div>

//         {/* RIGHT CONTENT SECTION */}
//         <div className="p-5 flex-1">

//           {/* TITLE ROW */}
//           <div className="flex justify-between items-start">
//             <h2 className="text-lg font-bold text-blue-900">
//               {property.address}
//             </h2>

//             <div className="flex gap-2 text-gray-500">
//               <span className="cursor-pointer hover:text-blue-600 transition">
//                 🤍
//               </span>
//               <span className="cursor-pointer hover:text-blue-600 transition">
//                 ↗
//               </span>
//             </div>
//           </div>

//           {/* INFO BOX */}
//           <div className="bg-blue-50 rounded-lg p-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm border border-blue-100">

//             <div className="md:border-r border-blue-200 pr-3">
//               <p className="text-blue-600 text-xs font-semibold">CARPET AREA</p>
//               <p className="font-bold text-gray-800">{property.area}</p>
//             </div>

//             <div className="md:border-r border-blue-200 pr-3">
//               <p className="text-blue-600 text-xs font-semibold">STATUS</p>
//               <p className="font-bold text-green-700">
//                 {property.status}
//               </p>
//             </div>

//             <div>
//               <p className="text-blue-600 text-xs font-semibold">TYPE</p>
//               <p className="font-bold text-gray-800">{property.type}</p>
//             </div>

//           </div>

//           {/* DESCRIPTION */}
//           <p className="text-sm text-gray-600 mt-4">
//             Brokers excuse, 2bhk + study, north facing, available for immediate sale...
//           </p>

//           {/* PRICE & BUTTONS SECTION */}
//           <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">

//             {/* PRICE */}
//             <div className="bg-blue-50 px-4 py-2 rounded-lg">
//               <p className="text-2xl font-bold text-blue-900">
//                 ₹{property.price}
//               </p>

//               <p className="text-sm text-gray-600">
//                 {property.perSqft}
//               </p>
//             </div>

//             {/* BUTTONS */}
//             <div className="flex flex-row gap-3 w-full md:w-auto">

//               <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-full md:w-auto">
//                 Contact Owner
//               </button>

//               <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition w-full md:w-auto">
//                 Get Phone No.
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }



export default function PropertyCardOrange() {
  const property = {
    title: "Vatika The Seven Lamps",
    address: "2 BHK Flat in Sector 82, Gurgaon",
    price: "1.75 Cr",
    perSqft: "₹12,195 /sqft",
    area: "1,435 sqft",
    type: "2 BHK",
    status: "Ready To Move",

    image:
      "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
  };

  return (
    <div className="min-h-screen bg-orange-50 p-6 flex justify-center items-center">

      <div className="max-w-5xl w-full bg-white shadow-lg border border-orange-200 overflow-hidden flex flex-col md:flex-row">

        {/* LEFT SECTION – IMAGE ONLY */}
        <div className="relative md:w-2/5">

          <img
            src={property.image}
            className="w-full h-64 md:h-full object-cover"
            alt="property"
          />

          {/* FEATURE TAG */}
          <div className="absolute top-3 left-3 bg-white text-orange-600 text-xs px-3 py-1 font-semibold shadow">
            Hot Deal
          </div>

        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="p-6 flex-1 flex flex-col justify-between">

          <div>

            {/* TITLE AREA */}
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-orange-900">
                {property.title}
              </h2>

              <span className="cursor-pointer text-gray-400 hover:text-orange-600 transition">
                🤍
              </span>
            </div>

            <p className="text-gray-600 mt-1">
              {property.address}
            </p>

            {/* INFO CARDS WITHOUT ROUNDED */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

              <div className="bg-orange-100 p-4 border border-orange-200">
                <p className="text-xs text-orange-700">PROPERTY TYPE</p>
                <p className="font-bold text-gray-900 mt-1">
                  {property.type}
                </p>
              </div>

              <div className="bg-orange-100 p-4 border border-orange-200">
                <p className="text-xs text-orange-700">CARPET AREA</p>
                <p className="font-bold text-gray-900 mt-1">
                  {property.area}
                </p>
              </div>

              <div className="bg-orange-100 p-4 border border-orange-200">
                <p className="text-xs text-orange-700">STATUS</p>
                <p className="font-bold text-green-700 mt-1">
                  {property.status}
                </p>
              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Brokers excuse, 2bhk + study, north facing, available for immediate sale...
            </p>

          </div>

          {/* PRICE & ACTION BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 border-t pt-4">

            {/* PRICE */}
            <div className="bg-orange-50 px-4 py-2 border border-orange-200">
              <p className="text-2xl font-bold text-orange-900">
                ₹{property.price}
              </p>

              <p className="text-sm text-gray-600">
                {property.perSqft}
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 w-full md:w-auto">

              <button className="bg-orange-600 text-white px-6 py-2 hover:bg-orange-700 transition w-full md:w-auto">
                Contact Owner
              </button>

              <button className="border border-orange-600 text-orange-600 px-6 py-2 hover:bg-orange-50 transition w-full md:w-auto">
                Get Phone No.
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
