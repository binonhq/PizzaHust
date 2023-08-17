import React from "react";

const AdminAddProduct = () => {
    return (

        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div className="row">
                <ol className="breadcrumb">
                    <li><a href="#"><svg className="glyph stroked home"><use xlinkHref="#stroked-home" /></svg></a></li>
                    <li><a href>Quản lý sản phẩm</a></li>
                    <li className="active">Thêm sản phẩm</li>
                </ol>
            </div>{/*/.row*/}
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Thêm sản phẩm</h1>
                </div>
            </div>{/*/.row*/}
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="col-md-6">
                                <form role="form" method="post" encType="multipart/form-data">
                                    <div className="form-group">
                                        <label>Tên sản phẩm</label>
                                        <input required name="prd_name" className="form-control" placeholder />
                                    </div>
                                    <div className="form-group">
                                        <label>Giá sản phẩm</label>
                                        <input required name="prd_price" type="number" min={0} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Bảo hành</label>
                                        <input required name="prd_warranty" type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phụ kiện</label>
                                        <input required name="prd_accessories" type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Khuyến mãi</label>
                                        <input required name="prd_promotion" type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Tình trạng</label>
                                        <input required name="prd_new" type="text" className="form-control" />
                                    </div>
                                </form></div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Ảnh sản phẩm</label>
                                    <input required name="prd_image" type="file" />
                                    <br />
                                    <div>
                                        <img src="img/download.jpeg" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Danh mục</label>
                                    <select name="cat_id" className="form-control">
                                        <option value={1}>iPhone</option>
                                        <option value={2}>Samsung</option>
                                        <option value={3}>Nokia</option>
                                        <option value={4}>LG</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Trạng thái</label>
                                    <select name="prd_status" className="form-control">
                                        <option value={1} selected>Còn hàng</option>
                                        <option value={0}>Hết hàng</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Sản phẩm nổi bật</label>
                                    <div className="checkbox">
                                        <label>
                                            <input name="prd_featured" type="checkbox" defaultValue={1} />Nổi bật
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Mô tả sản phẩm</label>
                                    <textarea required name="prd_details" className="form-control" rows={3} defaultValue={""} />
                                </div>
                                <button name="sbm" type="submit" className="btn btn-success">Thêm mới</button>
                                <button type="reset" className="btn btn-default">Làm mới</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>	

  );
};

export default AdminAddProduct;
