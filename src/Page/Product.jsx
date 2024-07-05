// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { Button } from "../components/ui/button";
// import { useDispatch, useSelector } from "react-redux";
// import { getProduct } from "../Redux/MovieRedux/action";
// import DataForm from "../components/DataForm";
// import Loader from "../components/Loader";

// function Product() {
//   const dispatch = useDispatch();
//   const [showForm, setShowForm] = useState(false);

//   const { product, isLoading } = useSelector((state) => state.productReducer);
//   let data = product.products;
//   console.log(isLoading);

//   useEffect(() => {
//     dispatch(getProduct());
//   }, [dispatch]);

//   const openPopup = () => {
//     setShowForm(true);
//   };
//   const closePopup = () => {
//     setShowForm(false);
//   };
//   if (isLoading) {
//     return <Loader />;
//   }
//   return (
//     <div className="flex flex-col gap-5 py-2">
//       <div className="flex justify-between gap-3">
//         <div className="text-2xl flex flex-col justify-center items-center border h-[150px] rounded-lg w-full bg-slate-50">
//           <strong> Total Product:-</strong>
//           <strong>{data?.length}</strong>
//         </div>
//         <div className="border h-[150px] rounded-lg w-full bg-slate-50"></div>
//         <div className="border h-[150px] rounded-lg w-full bg-slate-50">
//           <button>Add product</button>
//         </div>
//       </div>
//       <div>
//         <Table className="w-full">
//           <TableCaption>A list of your recent invoices.</TableCaption>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="w-[50px]">S.no</TableHead>
//               <TableHead className="">Poster</TableHead>
//               <TableHead className="">Title</TableHead>

//               <TableHead>Status</TableHead>
//               <TableHead>Category</TableHead>
//               <TableHead>Quantity</TableHead>
//               <TableHead>Price</TableHead>
//               <TableHead className="">Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {data?.map((items, index) => (
//               <TableRow>
//                 <TableCell className="font-medium">{index + 1}</TableCell>
//                 <TableCell className="font-medium">
//                   <Avatar>
//                     <AvatarImage src={items.imageUrl} />
//                     <AvatarFallback>CN</AvatarFallback>
//                   </Avatar>
//                 </TableCell>
//                 <TableCell className="font-medium">{items.name}</TableCell>
//                 <TableCell
//                   className={
//                     items.stock > 0 ? "text-green-500" : "text-red-500"
//                   }
//                 >
//                   {items.stock > 0 ? "In stock" : "Out of stock"}
//                 </TableCell>
//                 <TableCell>{items.category}</TableCell>
//                 <TableCell>{items.stock}</TableCell>
//                 <TableCell>₹{items.price}</TableCell>
//                 <TableCell className=" flex gap-1">
//                   <Button variant={"secondary"} onClick={openPopup}>
//                     Edit
//                   </Button>
//                   <Button variant={"secondary"}>Delete</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//       {showForm && <DataForm closePopup={closePopup} />}
//     </div>
//   );
// }

// export default Product;

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../Redux/MovieRedux/action";
import DataForm from "../components/DataForm";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { Plus } from "lucide-react";

function Product() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Define isEditing state

  const { product, isLoading } = useSelector((state) => state.productReducer);
  let data = product.products;
  console.log(isLoading);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const openPopup = (product = null) => {
    setSelectedProduct(product);
    setIsEditing(!!product); // Set isEditing based on whether a product is passed
    setShowForm(true);
  };

  const closePopup = () => {
    setShowForm(false);
    setSelectedProduct(null);
  };

  const handleFormSubmit = (formData) => {
    if (isEditing) {
      dispatch(updateProduct(selectedProduct._id, formData)); // Update existing product
    } else {
      dispatch(addProduct(formData)); // Add new product
    }
    closePopup();
  };
  const handleDelete = (id) => {
    // Show confirmation toast
    toast(
      (t) => (
        <div
          style={{
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          }}
        >
          <p>Are you sure you want to delete this product?</p>
          <div className="flex gap-2 mt-2 justify-center">
            <Button
              onClick={() => {
                dispatch(deleteProduct(id));
                toast.dismiss(t.id);
              }}
              variant="danger"
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                toast.dismiss(t.id);
              }}
              variant="secondary"
            >
              No
            </Button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
      }
    );
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      style={{ height: "calc(100vh - 65px)" }}
      className="back-image flex flex-col gap-5 py-2 overflow-y-auto"
    >
      <div className="text-white flex justify-between gap-3">
        <div className="text-2xl flex flex-col justify-center items-center border h-[150px] rounded-lg w-full backdrop-blur-sm">
          <strong>Total Product:-</strong>
          <strong>{data?.length}</strong>
        </div>
        <div className="backdrop-blur-sm border h-[150px] rounded-lg w-full "></div>
        <div className="backdrop-blur-sm flex flex-col  justify-center items-center border h-[150px] rounded-lg w-full">
          <span
            className="flex flex-col  justify-center items-center"
            onClick={() => openPopup()}
          >
            <Plus className="cursor-pointer" size={48} />
            <span className="font-bold cursor-pointer">Add Product</span>
          </span>
        </div>
      </div>
      <div>
        <Table className="w-full">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="font-bold backdrop-blur-lg bg-white text-black">
            <TableRow>
              <TableHead className="w-[50px]">S.no</TableHead>
              <TableHead className="">Poster</TableHead>
              <TableHead className="">Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((items, index) => (
              <TableRow
                key={items._id}
                className="font-bold backdrop-blur-sm text-white"
              >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">
                  <Avatar>
                    <AvatarImage src={items.imageUrl} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{items.name}</TableCell>
                <TableCell
                  className={
                    items.stock > 0 ? "text-green-500" : "text-red-500"
                  }
                >
                  {items.stock > 0 ? "In stock" : "Out of stock"}
                </TableCell>
                <TableCell>{items.category}</TableCell>
                <TableCell>{items.stock}</TableCell>
                <TableCell>₹{items.price}</TableCell>
                <TableCell className="flex gap-1">
                  <Button
                    variant={"secondary"}
                    onClick={() => openPopup(items)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant={"secondary"}
                    onClick={() => handleDelete(items._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {showForm && (
        <DataForm
          closePopup={closePopup}
          productData={selectedProduct}
          onSubmit={handleFormSubmit}
          isEditing={isEditing} // Pass isEditing as a prop
        />
      )}
    </div>
  );
}

export default Product;
