const { Router } = require('express')
const { check } = require('express-validator')

const {
    obtenerCategoria,
    obtenerCategorias,
    crearCategoria,
    actualizarCategoria,
    borrarCategoria
} = require('../controllers').Categoria;

const { validarCampos } = require('../middlewares');

const router =  Router();

router.get('/', obtenerCategorias)
router.get('/:id', [ check('id', 'Su id de mongo no es vAlido').isMongoId() ], obtenerCategoria)
router.post('/', [
     check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos,]
    ,crearCategoria)
router.put('/:id', [ check('id','No es vAlido este id').isMongoId() ], actualizarCategoria)
router.delete('/:id', [ check('id','No es vAlido este id').isMongoId() ], borrarCategoria)

module.exports = router;
