import { useContext, createContext, useState } from "react";

const StaffInventoryContext = createContext();

export const useStaffInventoryContext = () => useContext(StaffInventoryContext);

export const StaffInventoryProvider = ({ children }) => {
    //Inventory table state
    const [inventoryTableRows, setInventoryTableRows] = useState([]);
    const [inventoryTableOriginalRows, setInventoryTableOriginalRows] = useState([]);

    //Expired product table state
    const [expiredTableRows, setExpiredTableRows] = useState([]);
    const [expiredTableOriginalRows, setExpiredTableOriginalRows] = useState([]);
  
    //Staff table state
    const [staffTableRows, setStaffTableRows] = useState([]);
    const [staffTableOriginalRows, setStaffTableOriginalRows] = useState([]);

    //Order list
    const [orderListRows, setOrderListRows] = useState([]);
    const [orderListOriginalRows, setOrderListOriginalRows] = useState([]);

    return (
      <StaffInventoryContext.Provider
        value={{
          inventoryTableRows,
          setInventoryTableRows,
          inventoryTableOriginalRows,
          setInventoryTableOriginalRows,
          expiredTableRows,
          setExpiredTableRows,
          expiredTableOriginalRows,
          setExpiredTableOriginalRows,
          staffTableRows,
          setStaffTableRows,
          staffTableOriginalRows,
          setStaffTableOriginalRows,
          orderListRows, 
          setOrderListRows,
          orderListOriginalRows, 
          setOrderListOriginalRows
        }}
      >
        {children}
      </StaffInventoryContext.Provider>
    );
  };