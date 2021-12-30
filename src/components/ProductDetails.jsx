import React, { Component } from 'react';
import { getBrands } from '../Services/BrandService';
import { getProduct } from '../Services/ProductService';

class ProductDetails extends Component {
  state = {
    products: { id: '', productName: '', brand: { id: '', brandLogo: '' }, brandName: '' },
    brandList: [],
  };

  componentDidMount() {
    const products = { ...this.state.products };
    const productId = this.props.match.params.id;
    if (productId !== '') {
      getProduct(productId).then((response) => {
        console.log(response.data);
        products.id = productId;
        products.productName = response.data.product_name;
        products.brand.id = response.data.brand.id;
        products.brandName = response.data.brand.brand_name;
        this.setState({ products });
      });
    }
    getBrands().then((response) => {
      const brandList = response.data;
      console.log(brandList);
      this.setState({ brandList });
      brandList.filter((b) => {
        if (b.id === products.brand.id) {
          products.brand.brandLogo = b.brand_logo;
        }
        this.setState({ products });
      });
    });
  }

  handleChange = ({ currentTarget: field }) => {
    const products = { ...this.state.products };
    products[field.name] = field.value;
    this.setState({ products });
  };

  handleBrandChange = (e) => {
    const index = e.currentTarget.selectedIndex;
    const optionElement = e.currentTarget.childNodes[index];
    const brandLogo = optionElement.getAttribute('data-img');
    const products = { ...this.state.products };
    products.brand.id = e.currentTarget.value;
    products.brand.brandLogo = brandLogo;
    this.setState({ products });
  };

  render() {
    const { products, brandList } = this.state;

    return (
      <>
        {/* <!-- Start product details --> */}
        <div className="top_image_detail mt-20">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-sm-6">
                  <div className="detail_top_img">
                    <img src="images/apple.png" alt="..." />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="apple_title">
                    <h2>
                      Apple iPhone X<br /> Black 64GB
                    </h2>
                    <img src={products.brand.brandLogo} alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="detaile_top_right">
                <div className="d_right_head">
                  <h4>Supplied By</h4>
                  <h3>Ali Express</h3>
                </div>
                <img src={products.brand.brandLogo} alt="..." />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start product info --> */}
        <div className="pr_info mt-30">
          <div id="Product_info">
            <div className="info_area">
              <div className="d-flex top_info_inner">
                <div id="headingInfo" className="headingInfo">
                  <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseInfo" aria-expanded="true" aria-controls="collapseInfo">
                      Product Basic Info <span className="fa fa-chevron-down ml-10"></span>
                    </button>
                  </h5>
                </div>
              </div>
              <div id="collapseInfo" className="collapse show collapseInfo mt-20" aria-labelledby="headingInfo" data-parent="#Product_info">
                <div className="row">
                  <div className="col-lg-3 col-md-6 br_color">
                    <div className="form-group">
                      <label htmlFor="productName">Product Name</label>
                      <input type="text" className="form-control" id="productName" name="productName" value={products.productName} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 br_color">
                    <div className="form-group select_area">
                      <label htmlFor="brand">Brand Name</label>
                      <select className="custom-select" id="brand" name="brand" value={products.brand.id} onChange={this.handleBrandChange}>
                        {brandList.map((b) => (
                          <option key={b.id} value={b.id} data-img={b.brand_logo}>
                            {b.brand_name}
                          </option>
                        ))}
                      </select>
                      <span className="fa fa-chevron-down ml-10 icon_down"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end product info --> */}
        {/* <!-- Start Suplier info --> */}
        <div className="suplier_info pd mt-30">
          <div className="d-flex">
            <div id="Suplier_collapse" className="headingInfo">
              <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#CollapseSuplier" aria-expanded="true" aria-controls="CollapseSuplier">
                  Supplier Info <span className="fa fa-chevron-down ml-10"></span>
                </button>
              </h5>
            </div>
            <div className="pr_top_info">
              <a href="#" className="cost_btn product_btn" data-toggle="modal" data-target="#changepasss45" id="modal_canel_two">
                Add New Supplier
              </a>
            </div>
          </div>
          {/* <!-- add suplier--> */}
          <div className="suplier_modal">
            <div className="modal right fade" id="changepasss45" tabIndex="-1" role="dialog" aria-labelledby="changepasss55">
              <div className="modal-dialog setting_modal" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="modal-title" id="changepasss55">
                      Other supliers offering apple iphone x
                    </h4>
                  </div>

                  <div className="modal-body">
                    <div className="btn_add_cancel">
                      <a href="#" className="cancel close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" />
                        Cancel
                      </a>
                      <a href="#" className="add" data-toggle="modal" data-target="#changepasss49" id="modal_canel_two">
                        Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Delate Category--> */}
            <div className="modal right fade" id="changepasss49" tabIndex="-1" role="dialog" aria-labelledby="changepasss60">
              <div className="modal-dialog setting_modal" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="modal-title" id="changepasss60">
                      Suplier add
                    </h4>
                  </div>

                  <div className="modal-body">
                    <p>Suplier add has been succesffully changed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="CollapseSuplier" className="collapse show collapsesuplie mt-20" aria-labelledby="Suplier_collapse" data-parent="#Product_info">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Supplier Logo</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Supplier SKU ID</th>
                  <th scope="col">Supplier Catalogue ID</th>
                  <th scope="col">Supplier Price</th>
                  <th scope="col">Currnecy</th>
                  <th scope="col">Region/Country</th>
                  <th scope="col">Client Price</th>
                  <th scope="col">Discount</th>
                  <th scope="col">VAT</th>
                  <th scope="col">
                    Minimum Order
                    <br /> Quantity{' '}
                    <span className="info_i" tooltip="Thumneil should not be more then 140*140 file size should not be 1mb file format can be .jpg .ong or gif" flow="left">
                      i
                    </span>
                  </th>
                  <th scope="col">
                    Estimated
                    <br /> Delivery Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="images/table_ali.png" />
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="Ali Express" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="APL05-BLK-64" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="ALE-BLK-64-8765" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="3200" />
                    </div>
                  </td>
                  <td>
                    <div className="center">
                      <select name="sources" id="sources" className="custom-select sources" placeholder="Source Type">
                        <option value="profile">AED</option>
                        <option value="word">Name</option>
                        <option value="hashtag">Top</option>
                      </select>
                      <span className="fa fa-chevron-down ml-10 icon_down"></span>
                    </div>
                  </td>
                  <td>
                    <div className="center">
                      <div className="form-group small_input table_accordion">
                        <div id="accordion565" className="accordion_area mt-10">
                          <div className="button_collapse select_area">
                            <div id="tbl1">
                              <div className="custom-radio  custom-control-inline" data-toggle="collapse" data-target="#rtb1" aria-expanded="false" aria-controls="rtb1">
                                <div className="select_drop custom-select bg_none">
                                  <span className="text_area">U.A.E</span>
                                  <span className="fa fa-chevron-down icon_down"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="rtb1" className="collapse bg_color postion_table" aria-labelledby="tbl1" data-parent="#accordion565">
                            <div id="accordion596" className="accordion_area">
                              <div className="button_collapse select_area">
                                <div id="r661">
                                  <div className="custom-radio  custom-control-inline collapsed" data-toggle="collapse" data-target="#rr601" aria-expanded="false" aria-controls="rr601">
                                    <div className="select_drop custom-select">
                                      <span className="text_area">U.A.E</span>
                                      <span className="fa fa-chevron-down ml-10 icon_down top_unset"></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="rr601" className="bg_color under_bg collapse" aria-labelledby="r661" data-parent="#accordion596">
                                <div className="button_collapse">
                                  <div className="collapsed">
                                    <div className="form-check form-check-inline Discontinued">
                                      <input className="form-check-input" type="checkbox" id="inlineCheckbox606" value="option1" />
                                      <label className="form-check-label" htmlFor="inlineCheckbox606">
                                        U.A.E
                                      </label>
                                    </div>
                                    <div className="form-check form-check-inline Discontinued">
                                      <input className="form-check-input" type="checkbox" id="inlineCheckbox07" value="option1" />
                                      <label className="form-check-label" htmlFor="inlineCheckbox07">
                                        Name
                                      </label>
                                    </div>
                                    <div className="form-check form-check-inline Discontinued">
                                      <input className="form-check-input" type="checkbox" id="inlineCheckbox608" value="option1" />
                                      <label className="form-check-label" htmlFor="inlineCheckbox608">
                                        Top
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="submit_btn">
                              <a href="#">select</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- <select name="sources" id="sources" className="custom-select sources" placeholder="Source Type">
												    <option value="profile">U.A.E</option>
												    <option value="word">Name</option>
												    <option value="hashtag">Top</option>
												</select> --> */}
                      <span className="fa fa-chevron-down ml-10 icon_down"></span>
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="4000" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="5 %" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input pd_rs">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="10%" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="200" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="2 days" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead className="o_zero">
                <tr>
                  <th scope="col">Supplier Logo</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Supplier SKU ID</th>
                  <th scope="col">Supplier Catalogue ID</th>
                  <th scope="col">Supplier Price</th>
                  <th scope="col">Currnecy</th>
                  <th scope="col">Region/Country</th>
                  <th scope="col">Client Price</th>
                  <th scope="col">Discount</th>
                  <th scope="col">VAT</th>
                  <th scope="col">
                    Minimum Order
                    <br /> Quantity{' '}
                    <span className="info_i" tooltip="Thumneil should not be more then 140*140 file size should not be 1mb file format can be .jpg .ong or gif" flow="left">
                      i
                    </span>
                  </th>
                  <th scope="col">
                    Estimated
                    <br /> Delivery Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="images/overlay_tble.png" />
                  </td>
                  <td>
                    <div className="form-group small_input table_accordion">
                      <div id="accordion56" className="accordion_area mt-10">
                        <div className="button_collapse select_area">
                          <div id="rtbl1">
                            <div className="custom-radio  custom-control-inline" data-toggle="collapse" data-target="#rrtb1" aria-expanded="false" aria-controls="rrtb1">
                              <div className="select_drop custom-select bg_none">
                                <span className="text_area o_zero">aliexpress</span>
                                <span className="fa fa-chevron-down icon_down"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="rrtb1" className="collapse bg_color postion_table" aria-labelledby="rtbl1" data-parent="#accordion56">
                          <div id="accordion59" className="accordion_area">
                            <div className="button_collapse select_area">
                              <div id="r61">
                                <div className="custom-radio  custom-control-inline collapsed" data-toggle="collapse" data-target="#rr61" aria-expanded="false" aria-controls="rr61">
                                  <div className="select_drop custom-select">
                                    <span className="text_area">Ali Express</span>
                                    <span className="fa fa-chevron-down ml-10 icon_down"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="rr61" className="bg_color under_bg collapse" aria-labelledby="r61" data-parent="#accordion59">
                              <div className="button_collapse">
                                <div className="collapsed">
                                  <div className="form-check form-check-inline Discontinued">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox166" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox166">
                                      Ali Express
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline Discontinued">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox167" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox167">
                                      amazon
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline Discontinued">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox168" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox168">
                                      daraz
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="submit_btn">
                            <a href="#">select</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="" />
                    </div>
                  </td>
                  <td>
                    <div className="center">
                      <select name="sources" id="sources" className="custom-select sources" placeholder="">
                        <option value="profile"></option>
                        <option value="word">Name</option>
                        <option value="hashtag">Top</option>
                      </select>
                      <span className="fa fa-chevron-down ml-10 icon_down"></span>
                    </div>
                  </td>
                  <td>
                    <div className="center">
                      <select name="sources" id="sources" className="custom-select sources" placeholder="">
                        <option value="profile"></option>
                        <option value="word">Name</option>
                        <option value="hashtag">Top</option>
                      </select>
                      <span className="fa fa-chevron-down ml-10 icon_down"></span>
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input pd_rs">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="" />
                    </div>
                  </td>
                  <td>
                    <div className="form-group small_input">
                      <input type="text" className="form-control" id="exampleInputEmail95" placeholder="" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="br_bottom_dash de-flex pl-10">
              <div className="form-check form-check-inline Discontinued font mr-20"></div>
              <div className="form-check form-check-inline Discontinued font"></div>
              <div className="right_save floatright">
                <a href="#" className="d-inline-block ">
                  Cancel
                </a>
                <a href="#" className="d-inline-block bg_color">
                  Save
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end Suplier info --> */}
        {/* <!-- Save --> */}
        <div className="product_save d-block text-right mt-40">
          <a href="#">Save Changes</a>
        </div>
      </>
    );
  }
}

export default ProductDetails;
