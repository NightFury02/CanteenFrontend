import React from "react";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import userApi from "../../../../api/userApi";
import { useStaffInventoryContext } from "../../../../context/Staff/StaffInventoryContext";
import { Loading } from "../../../../components";

const EditStaffForm = (props) => {
  const { targetStaff, setOpen } = props;
  const [editedTarget, setEditedTarget] = React.useState({
    _id: targetStaff._id || "",
    name: targetStaff.name || "",
    address: targetStaff.address || "",
    birthday: targetStaff.birthday || "",
    phone: targetStaff.phone || "",
  });
  const [errors, setErrors] = React.useState({
    _id: "",
    name: "",
    address: "",
    birthday: "",
    phone: "",
  });
  const { setStaffTableRows, setStaffTableOriginalRows } =
    useStaffInventoryContext();

    const [editedStaff, setEditedStaff] = React.useState({
        _id: targetStaff._id || '', 
        name: targetStaff.name || '',
        birthday: targetStaff.birthday || '',
        phone: targetStaff.phone || '',
        address: targetStaff.address || '',
    });
    
    const token = localStorage.getItem("token");
    const clientId = localStorage.getItem("clientId");

    const handleCancel = () => {
        setOpen(false);
    }
    
    const handleSubmit = () => {
        const editStaff = async () => {
            setLoading(true);
            const attributes = {
                "address": editedStaff.address,
                "birthday": editedStaff.birthday,
                "phone": editedStaff.phone
            };

            const data = {
                "attributes": attributes,
                "name": editedStaff.name,
                "_id": editedStaff._id
            };

            const res = await userApi.updateStaffInfo({token, clientId}, data);
            console.log(res)
            const newData = await userApi.getStaffList({token, clientId});
            const transformedData = newData.data.map(item => ({
              ...item,
              ...item.attributes // Spread attributes directly
            }));
            console.log(newData)
      
            setStaffTableRows(transformedData);
            setStaffTableOriginalRows(transformedData);
            setLoading(false);
        }
        editStaff();
        setOpen(false);
    }

    const handleInputChange = (name, value) => {
        setEditedStaff((previous) => (
            {
                ...previous,
                [name]: value
            }
        ))
    }

    const textFieldStyle = {
        marginBottom: '2rem',
    }
    return (
        <div>
<form 
            className="flex flex-col min-w-[600px]"
            autoComplete='off'
        >
            <TextField
                variant='outlined'
                label="Mã nhân viên"
                name="_id"
                defaultValue={targetStaff._id}
                sx={textFieldStyle}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                variant='outlined'
                label="Tên nhân viên"
                name="name"
                value={editedStaff.name}
                onChange={(e) => {handleInputChange("name", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                label="Ngày sinh"
                name="birthday"
                type="date" 
                value={editedStaff.birthday}
                onChange={(e) => {handleInputChange("birthday", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Số điện thoại"
                name="phone"
                value={editedStaff.phone}
                onChange={(e) => {handleInputChange("phone", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Địa chỉ"
                name="address"
                value={editedStaff.address}
                onChange={(e) => {handleInputChange("address", e.target.value) }}
                sx={textFieldStyle}
            />
            <CustomButton
                title='Hủy'
                variant='secondary'
                onAction={handleCancel}
                className="p-2"
            />
            <CustomButton
                title='Xác nhận'
                variant='tertiary'
                onAction={handleSubmit}
                className="p-2"
            />
        </form>
        {isLoading && <Loading/>}
        </div>
    )
}

export default EditStaffForm;
