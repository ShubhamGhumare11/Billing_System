import React, { useState } from 'react';
import { Button, VStack } from '@chakra-ui/react';

// Import all components
// import ProductList from './ProductList';
// import BillingForm from './BillingForm';
// import Invoice from './Invoice';
// import OrderHistory from './OrderHistory';
// import Reports from './Reports';

const HomePage = () => {
   const [activeComponent, setActiveComponent] = useState(null);

   // Function to handle button clicks and set active component
   const handleButtonClick = (component) => {
      setActiveComponent(component);
   };

   return (
      <VStack spacing={4}>
         <h1>Admin Dashboard</h1>
         {/* <Button onClick={() => handleButtonClick('ProductList')}>Product List</Button>
         <Button onClick={() => handleButtonClick('BillingForm')}>Billing Form</Button>
         <Button onClick={() => handleButtonClick('Invoice')}>Generate Invoice</Button>
         <Button onClick={() => handleButtonClick('OrderHistory')}>Order History</Button>
         <Button onClick={() => handleButtonClick('Reports')}>Reports</Button>

       
         {activeComponent === 'ProductList' && <ProductList />}
         {activeComponent === 'BillingForm' && <BillingForm />}
         {activeComponent === 'Invoice' && <Invoice />}
         {activeComponent === 'OrderHistory' && <OrderHistory />}
         {activeComponent === 'Reports' && <Reports />} */}
      </VStack>
   );
};

export default HomePage;
