import '../styles/Layout.css';

function Layout() {
    return (
        <div className="layout-container">

       

            <div className="layout1">

            <div className="perfil">
                    <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" alt="" /> 
                    <h3>Pedrito</h3>  
                    <p>Frase del dia</p>

            </div>
                <div className="descripcion">
                    <h1>Descripcion</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quo quaerat dicta suscipit. Ut ducimus necessitatibus officia veritatis ullam, corporis harum? Ut laudantium aliquid delectus tenetur laboriosam, id quam earum? Temporibus veniam eligendi doloremque exercitationem tempore, aspernatur quibusdam inventore illum dicta impedit repellat aliquam labore tenetur hic blanditiis voluptas error!</p>
                        <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quo quaerat dicta suscipit. Ut ducimus necessitatibus officia veritatis ullam, corporis harum? Ut laudantium aliquid delectus tenetur laboriosam, id quam earum? Temporibus veniam eligendi doloremque exercitationem tempore, aspernatur quibusdam inventore illum dicta impedit repellat aliquam labore tenetur hic blanditiis voluptas error!</p>

                    <button className="btn_home">Contactame baby</button>
                </div>




                </div>

            <div className="layout2">
                <div className="perfiles perfil1">
                    <img src="https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_1280.jpg" alt="" />
                    <h3>Gato travieso</h3>
                    <p>Gato travieso</p>
                </div>
                <div className="perfiles perfil2">
                    <img src="https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg" alt="" />
                    <h3>Gato travieso</h3>
                    <p>Gato travieso</p>
                </div>
                <div className="perfiles perfil3">
                    <img src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg" alt="" />
                    <h3>Gato travieso</h3>
                    <p>Gato travieso</p>
                </div>
            </div>


        </div>
      
    )
}

export default Layout
