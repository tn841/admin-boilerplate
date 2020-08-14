import React, { useState } from 'react'
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { IMG_UPLOAD_URL } from '../../../constant';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);

    return new Promise( (resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
            return resolve(reader.result)
        }
    })
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('JPG/PNG 파일만 업로드할 수 있습니다.');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('2MB 이하 파일만 업로드할 수 있습니다.');
    }
    return isJpgOrPng && isLt2M;
}

function ImgUpload() {

    const [loading, setloading] = useState(false);
    const [imgurl, setImgurl] = useState('');

    const handleChange = info => {
        console.log(info)
        console.log(imgurl)
        if(info.file.status === 'uploading') {
            setloading(true)
            return;
        }
        if(info.file.status === 'done'){
            getBase64(info.file.originFileObj, imageUrl => {
                
                setImgurl(imageUrl);

                setloading(false);
            })
            console.log(imgurl)
        }
    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <div>
            <Upload
                name='bannerimg'
                listType="picture-card"
                showUploadList={false}
                className="avatar-uploader"
                action='https://www.mocky.io/v2/5cc8019d300000980a055e76' //{IMG_UPLOAD_URL}
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imgurl ? <img src={imgurl} alt="bannerimg" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        </div>
    )
}

export default ImgUpload

