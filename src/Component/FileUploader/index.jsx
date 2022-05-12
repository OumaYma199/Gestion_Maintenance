import './style.css'
import Header from '../side-bar/Header';
export const FileUploader = ({}) => {
    return (         
        <React.Fragment>
        <Header />
        <div className="APP">
        <form method="post" action="#" id="#">              
        <div className="form-group files">
          <label>Upload Your File </label>
          <input type="file" className="form-control" multiple="" />
        </div>
        <button>View</button>
      
    </form>  
    </div>
    </React.Fragment>
    );
}
