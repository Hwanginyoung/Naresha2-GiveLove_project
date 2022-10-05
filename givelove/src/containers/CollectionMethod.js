import './CollectionMethod.css';

function CollectionMethod() {

   const checkOnlyOne = (checkThis) => {
      const checkboxes = document.getElementsByName('method')
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
          checkboxes[i].checked = false
        }
      }
    }

    return (
      <>
         <div id="send">
            <input type="checkbox" name="method" class="method" value="package" onChange={(e) => checkOnlyOne(e.target)} /> <p>택배</p>
            <input type="checkbox" name="method" class="method" value="direct" onChange={(e) => checkOnlyOne(e.target)} /> <p>직접방문</p>
            <input type="checkbox" name="method" class="method" value="pickup" onChange={(e) => checkOnlyOne(e.target)} /> <p>방문수거</p>
        </div>
      </>
    )
}

export default CollectionMethod;
