export default function Paginacion(props){

    const getPages = () => {
        const result = [];
        for (let i =0; i < props.total; i++){
            
            let numpage = i + 1;
 
            result.push(
            <a onClick={() => props.onChange(numpage)} 
            className={props.page === numpage ? "active" : ''} 
            href="#">{numpage}
            </a>
            );
        }
        return result;
    }

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Page {props.page} of {props.total}:</span>

                {getPages()}
            </div>
        </div>
    );
}