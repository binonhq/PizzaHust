import React from "react";

const AdminProduct = () => {
    return (
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div className="row">
                <ol className="breadcrumb">
                    <li><a href="#"><svg className="glyph stroked home"><use xlinkHref="#stroked-home" /></svg></a></li>
                    <li className="active">Danh sách sản phẩm</li>
                </ol>
            </div>{/*/.row*/}
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Danh sách sản phẩm</h1>
                </div>
            </div>{/*/.row*/}
            <div id="toolbar" className="btn-group">
                <a href="product-add.html" className="btn btn-success">
                    <i className="glyphicon glyphicon-plus" /> Thêm sản phẩm
                </a>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <table data-toolbar="#toolbar" data-toggle="table">
                                <thead>
                                    <tr>
                                        <th data-field="id" data-sortable="true">ID</th>
                                        <th data-field="name" data-sortable="true">Tên sản phẩm</th>
                                        <th data-field="price" data-sortable="true">Giá</th>
                                        <th>Ảnh sản phẩm</th>
                                        <th>Trạng thái</th>
                                        <th>Danh mục</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sản phẩm số 1</td>
                                        <td>18.500.000 vnd</td>
                                        <td style={{ textAlign: 'center' }}><img width={130} height={180} src="img/pizza7.png" /></td>
                                        <td><span className="label label-success">Còn hàng</span></td>
                                        <td>Danh mục số 1</td>
                                        <td className="form-group">
                                            <a href="product-edit.html" className="btn btn-primary"><i className="glyphicon glyphicon-pencil" /></a>
                                            <a href="product-edit.html" className="btn btn-danger"><i className="glyphicon glyphicon-remove" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Sản phẩm số 2</td>
                                        <td>18.500.000 vnd</td>
                                        <td style={{ textAlign: 'center' }}><img width={130} height={180} src="img/pizza4.png" /></td>
                                        <td><span className="label label-danger">Hết hàng</span></td>
                                        <td>Danh mục số 1</td>
                                        <td className="form-group">
                                            <a href="product-edit.html" className="btn btn-primary"><i className="glyphicon glyphicon-pencil" /></a>
                                            <a href="product-edit.html" className="btn btn-danger"><i className="glyphicon glyphicon-remove" /></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="panel-footer">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">«</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">»</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminProduct;
