import React from "react";

function AdminAdd() {
    return (
        <div className="bg-white w-4/5 p-8">
            <h1 className="text-2xl font-semibold">Thêm sản phẩm mới</h1>
            {/* Form thêm mới sản phẩm */}
            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-semibold">Tên sản phẩm</label>
                    <input required name="prd_name" className="block w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block font-semibold">Giá sản phẩm</label>
                    <input required name="prd_price" type="number" min={0} className="block w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block font-semibold">Phụ kiện</label>
                    <input required name="prd_accessories" type="text" className="block w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block font-semibold">Khuyến mãi</label>
                    <input required name="prd_promotion" type="text" className="block w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block font-semibold">Tình trạng</label>
                    <input required name="prd_new" type="text" className="block w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block font-semibold">Ảnh sản phẩm</label>
                    <input required name="prd_image" type="file" className="block w-full" />
                    <div className="mt-2">
                        <img src="img/download.jpeg" />
                    </div>
                </div>
                <div>
                    <label className="block font-semibold">Danh mục</label>
                    <select name="cat_id" className="block w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring focus:ring-blue-200">
                        <option value={1}>iPhone</option>
                        <option value={2}>Samsung</option>
                        <option value={3}>Nokia</option>
                        <option value={4}>LG</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold">Trạng thái</label>
                    <select name="prd_status" className="block w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring focus:ring-blue-200">
                        <option value={1} selected>Còn hàng</option>
                        <option value={0}>Hết hàng</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label className="block font-semibold">Sản phẩm nổi bật</label>
                    <div className="mt-1">
                        <label className="inline-flex items-center">
                            <input name="prd_featured" type="checkbox" defaultValue={1} className="form-checkbox" />
                            <span className="ml-2">Nổi bật</span>
                        </label>
                    </div>
                </div>
                <div className="md:col-span-2 flex justify-center">
                    <button name="sbm" type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Thêm mới</button>
                    <button type="reset" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg ml-2 hover:bg-gray-400">Làm mới</button>
                </div>
            </form>
            {/* Kết thúc Form thêm mới sản phẩm */}
        </div>

    );
}

export default AdminAdd;
