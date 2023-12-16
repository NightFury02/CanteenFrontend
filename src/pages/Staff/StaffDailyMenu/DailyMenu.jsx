import React from 'react'
const DailyMenu = ({data}) => {
    return (
        <div className="mt-3 row-container max-h-[550px] overflow-y-auto bg-dark-line border-2 border-dark-bg-2 rounded-md"> 
            <table className="table-auto w-full">
            <thead className='sticky top-0 bg-dark-bg-2 z-10'>
                <tr>
                    <th className='px-4 py-3 text-left text-white'>Mã sản phẩm</th>
                    <th className='px-4 py-3 text-left text-white'>Hình ảnh</th>
                    <th className='px-4 py-3 text-left text-white'>Tên sản phẩm</th>
                    <th className='px-4 py-3 text-left text-white'>Giá nhập</th>
                    <th className='px-4 py-3 text-left text-white'>Đơn giá</th>
                    <th className='px-4 py-3 text-left text-white'>Số lượng</th>
                </tr>
            </thead>
            <tbody>
                {   data &&
                    data.map((row, index) => (
                        <tr key={index} className="border-t border-dark-bg-1">
                            <td className="p-4">
                                <p className="text-sm font-semibold leading-6 text-white">{row.id}</p>
                            </td>
                            <td className="p-4">
                                <img className="h-[60px] w-[60px] flex-none bg-gray-50" src={row.image} alt="" />
                            </td>
                            <td className="p-4">
                                <p className="text-sm font-semibold leading-6 text-white">{row.name}</p>
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
    )
}

export default DailyMenu;