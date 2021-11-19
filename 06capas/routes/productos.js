const { Router } =  require('express')
const { check } = require('express-validator')

const   {
    crearProducto,
    actualizarProducto,
    borrarProducto,
    obtenerProducto,
    obtenerProductos}   = require('../controllers').Producto;

const { validarCampos } = require('../middlewares');


const router =  Router();

////      https://localhost:3000/api/v1      /productos     /298374283746287346

router.get('/', obtenerProductos );
router.get('/:id', [ check('id', 'Su id de mongo no es vAlido').isMongoId() ], obtenerProducto );
router.post('/', [ check('nombre', 'El nombre es obligatorio').not().isEmpty(),
                    validarCampos,
                 ], crearProducto);
router.put('/:id',  actualizarProducto);
router.delete('/:id', [ check('id','No es vAlido este id').isMongoId() ] ,  borrarProducto);

module.exports = router;