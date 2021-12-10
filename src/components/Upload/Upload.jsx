import React, { Component } from "react";
import { Upload, Modal, message } from "antd";
import { PlusOutlined,LoadingOutlined } from "@ant-design/icons";
import { upload_img } from "@/axios/api";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
class Uploads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      loading: false,
      fileList: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-2",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-3",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-4",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      ],
    };
  }
  //上传
  beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      return message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      return message.error("Image must smaller than 2MB!");
    }
    this.setState({ loading: true });
    let from = new FormData();
    from.append("file", file);
    upload_img(from)
      .then((res) => {
        let arrlist = this.state.fileList;
        arrlist.push({
          uid: String(Math.floor(Math.random() * 10)),
          name: file.name,
          url: res.fullurl,
        });
        this.setState({ fileList: arrlist,loading:false });
        // 传递
        this.props.upload_list(arrlist);
      })
      .catch((error) => {
        console.log(error);
      });
    return false;
  };
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  //删除
  onRemove = (file) => {
    let arrlist = this.state.fileList;
    arrlist = arrlist.filter((item) => !item.uid.includes(file.uid));
    this.setState({ fileList: arrlist });
    //传递
    this.props.upload_list(arrlist)
    return false;
  };
  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <div>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          beforeUpload={this.beforeUpload}
          onRemove={this.onRemove}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default Uploads;
