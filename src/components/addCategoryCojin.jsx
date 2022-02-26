import React from 'react'


const addCategoryCojin = () => {

  //options del input 
  const options = [
    { value: "cojines", label: "cojines" },
    { value: "bts_polos", label: "bts_polos" },
    { value: "disneyPolos", label: "disneyPolos" },
  ];

	const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collectionProduct, {
      name: newProductName,
      price: newProductPrice,
      url: productUrl,
      category: newCategory,
    });
    // console.log(category)
  };
  const [newProductPrice, setNewProductPrice] = useState(0);
  const [newProductName, setNewProductName] = useState("");


  return (
    <div className="dashboard_content">
        <h1>Agrega nuevos items a la coleccion</h1>
        <h2>llena los espacios</h2>

        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">nombre de producto</label>
            <input
              type="text"
              className="form-control"
              placeholder="nombre de producto"
              onChange={(event) => {
                setNewProductName(event.target.value);
              }}
            />
            <div className="mb-3">
              <label className="form-label">precio de producto</label>
              <input
                type="number"
                className="form-control"
                placeholder="nombre de producto"
                onChange={(event) => {
                  setNewProductPrice(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Categoria: </label>
              <Select onChange={handleCategory} options={options} />
            </div>
            <div className="mb-3">
              <label className="form-label">subir imagen</label>
              <input
                type="file"
                className="form-control"
                placeholder="seleciona una imagen"
                onChange={fileHandler}
              />
            </div>
            <button
              className="btn btn-primary"
            >
              agregar
            </button>
          </div>
        </form>
      </div>
  )
}

export default addCategoryCojin
