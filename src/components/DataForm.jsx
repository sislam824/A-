// import React, { useState, useEffect } from "react";
// import { Button } from "./ui/button";

// function DataForm({ closePopup, productData, onSubmit, isEditing }) {
//   const [formValues, setFormValues] = useState({
//     name: "",
//     imageUrl: "",
//     category: "",
//     stock: "",
//     price: "",
//   });

//   useEffect(() => {
//     if (isEditing && productData) {
//       setFormValues({
//         name: productData.name,
//         imageUrl: productData.imageUrl,
//         category: productData.category,
//         stock: productData.stock,
//         price: productData.price,
//       });
//     }
//   }, [isEditing, productData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formValues);
//   };

//   return (
//     <div className="bg-black bg-opacity-50 backdrop-blur-sm fixed w-full z-50 left-0 top-0 h-screen flex justify-center items-center">
//       <form className="w-[30%] bg-white p-2 rounded-lg" onSubmit={handleSubmit}>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="name"
//             id="floating_name"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             value={formValues.name}
//             onChange={handleChange}
//             required
//           />
//           <label
//             htmlFor="floating_name"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Title
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="imageUrl"
//             id="floating_imageUrl"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             value={formValues.imageUrl}
//             onChange={handleChange}
//             required
//           />
//           <label
//             htmlFor="floating_imageUrl"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Image URL
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="category"
//             id="floating_category"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             value={formValues.category}
//             onChange={handleChange}
//             required
//           />
//           <label
//             htmlFor="floating_category"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Category
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="number"
//             name="stock"
//             id="floating_stock"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             value={formValues.stock}
//             onChange={handleChange}
//             required
//           />
//           <label
//             htmlFor="floating_stock"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Quantity
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="number"
//             name="price"
//             id="floating_price"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             value={formValues.price}
//             onChange={handleChange}
//             required
//           />
//           <label
//             htmlFor="floating_price"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Price
//           </label>
//         </div>
//         <Button type="submit" className="w-full">
//           {isEditing ? "Update Product" : "Add Product"}
//         </Button>
//         <Button
//           type="button"
//           onClick={closePopup}
//           className="mt-2 w-full"
//           variant="secondary"
//         >
//           Cancel
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default DataForm;
// import React, { useState, useEffect } from "react";
// import { Button } from "./ui/button";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

function DataForm({ closePopup, productData, onSubmit, isEditing }) {
  const [formValues, setFormValues] = useState({
    name: "",
    imageUrl: "",
    category: "",
    stock: "",
    price: "",
  });

  useEffect(() => {
    if (isEditing && productData) {
      setFormValues({
        name: productData.name,
        imageUrl: productData.imageUrl,
        category: productData.category,
        stock: productData.stock,
        price: productData.price,
      });
    }
  }, [isEditing, productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0 flex justify-center items-center z-50">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">
          {isEditing ? "Edit Product" : "Add New Product"}
        </h2>
        <div className="mb-4">
          <label
            htmlFor="floating_name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            name="name"
            id="floating_name"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product title"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="floating_imageUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            id="floating_imageUrl"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter image URL"
            value={formValues.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="floating_category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            id="floating_category"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product category"
            value={formValues.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="floating_stock"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Quantity
          </label>
          <input
            type="number"
            name="stock"
            id="floating_stock"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product quantity"
            value={formValues.stock}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="floating_price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            id="floating_price"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product price"
            value={formValues.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-4">
          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
          >
            {isEditing ? "Update Product" : "Add Product"}
          </Button>
          <Button
            type="button"
            onClick={closePopup}
            className="w-full bg-gray-500 text-white hover:bg-gray-600"
            variant="secondary"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default DataForm;
