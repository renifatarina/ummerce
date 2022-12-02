function validasi(cls,type='str'){
    var val = $(cls).val()
    var name = $(cls).attr('name')
    if(val !== ""){

        if(type === 'str'){

            if($.type(val) === 'string'){
                return val
            }else{
                var tp = $.type(val)
                err = {'error' : 'type text harus string bukan '+tp,'point':cls}
                return err
            }

        }else if(type === 'int'){

            if($.isNumeric(val)){
                return val
            }else{
                var tp = $.type(val)
                err = {'error' : 'type text harus number bukan '+tp,'point':cls}
                return err
            }

        }else{

            err = {'error' : 'type tidak di temukan','point':cls}
            return err

        }

    }else{
        err = {'error' : name+' tolong jangan di kosong','point':cls}
        return err
    }
}