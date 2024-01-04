import React from 'react'
const ExportReportDetail = ({target}) => {
    const list = target.leave_list;
    //console.log(list)
    return (
        <div className='bg-dark-bg-2'>
            <div>Mã phiếu: <span className='text-white'>{target._id}</span> </div>
            <div>Nhân viên lập phiếu: <span className='text-white'>{target.user_id}</span> </div>
            <div>Ngày lập phiếu: <span className='text-white'>{target.createdAt}</span></div>

            <div className="mt-3 row-container max-h-[500px] overflow-y-auto border rounded-md"> 
                <table className="table-auto w-full">
                <thead className='bg-form sticky top-0 z-0'>
                    <tr>
                        <th className='px-4 py-1 text-left'>Mã sản phẩm</th>
                        {/* <th className='px-4 py-1 text-left'>Hình ảnh</th> */}
                        <th className='px-4 py-1 text-left'>Tên sản phẩm</th>
                        <th className='px-4 py-1 text-left'>Giá nhập</th>
                        <th className='px-4 py-1 text-left'>Giá bán</th>
                        <th className='px-4 py-1 text-left'>Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {   list &&
                        list.map((row, index) => (
                            <tr key={index} className="border-t border-dark-bg-1">
                                <td className="p-4">
                                    <p className="text-sm font-semibold leading-6 text-white">{row.inventoryItem}</p>
                                </td>
                                {/* <td className="p-4">
                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={row.image} alt="" />
                                </td> */}
                                <td className="p-4">
                                    <p className="text-sm font-semibold leading-6 text-white">{row.inventoryItem_name}</p>
                                </td>
                                <td className="p-4">
                                    <p className="text-sm font-semibold leading-6 text-white">{row.cost}</p>
                                </td>
                                <td className="p-4">
                                    <p className="text-sm font-semibold leading-6 text-white">{row.price}</p>
                                </td>
                                <td className="p-4">
                                    <p className="text-sm font-semibold leading-6 text-white">{row.quantity}</p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default ExportReportDetail;