import React from 'react'
const ExportReportDetail = ({target}) => {
    const list = target.data;
    //console.log(list)
    return (
        <div className='bg-dark-bg-2'>
            <div>Mã phiếu: <span className='text-white'>{target.id}</span> </div>
            <div>Nhân viên lập phiếu: <span className='text-white'>{target.staffName}</span> </div>
            <div>Ngày lập phiếu: <span className='text-white'>{target.createDate}</span></div>

            <div className="mt-3 row-container max-h-[800px] overflow-y-auto bg-form border rounded-md"> 
                <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className='px-4 py-1 text-left'>Mã sản phẩm</th>
                        <th className='px-4 py-1 text-left'>Hình ảnh</th>
                        <th className='px-4 py-1 text-left'>Tên sản phẩm</th>
                        <th className='px-4 py-1 text-left'>Gía bán</th>
                        <th className='px-4 py-1 text-left'>Số lượng</th>
                        <th className='px-4 py-1 text-left'>Hạn sử dụng</th>
                    </tr>
                </thead>
                <tbody>
                    {   list &&
                        list.map((row, index) => (
                            <tr key={index} className="border-t border-dark-bg-1">
                                <td className="p-4">
                                    <p className="text-sm font-semibold leading-6 text-white">{row.id}</p>
                                </td>
                                <td className="p-4">
                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={row.image} alt="" />
                                </td>
                                <td className="p-4">
                                    <p className="text-sm font-semibold leading-6 text-white">{row.name}</p>
                                </td>
                                <td className="p-4">
                                    <p className="text-sm font-semibold leading-6 text-white">{row.price}</p>
                                </td>
                                <td className="p-4">
                                    <p className="text-sm font-semibold leading-6 text-white">{row.quantity}</p>
                                </td>
                                <td className="p-4">
                                    <p className="text-sm font-semibold leading-6 text-white">{row.expirationDate}</p>
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