import React, { Fragment, setState } from "react"; 
import ImageUploader from 'react-images-upload';
import Message from './message';
import Axios from "axios";

const picUploader = () => {
    const [file, setFile] = setState("");
    const [filename, setFilename] = setState("Choose File");
    const [message, setMessage] = setState('');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
          const res = await Axios.post('/upload, formData', {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });  
          const { fileName, filePath } = res.data;

          ImageUploader.setUploadedFile({fileName, filePath});

          setMessage('File Uploaded');
        } catch(err) {
            if(err.response.status === 500){

                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    };

    return (
        <Fragment>
            {message ? <Message msg={message} /> : null}
            <form>
            <div className="custom-file mb-4">
  <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
  <label className="custom-file-label" htmlFor="customFile">
      {filename}
  </label>
            </div>

            <input type="sumbit" value="Upload" className="btn btn-primary btn-block mt-4" />
            </form>
           
        </Fragment>
    );
};
class PicUploader extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <PicUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}


export default PicUploader;
