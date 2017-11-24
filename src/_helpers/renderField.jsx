import React from 'react';

export const RenderField = (props) => {
    const { input, meta, label, type } = props;
    const hasError = meta.touched && meta.error;
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label">{label}</label>
        <div className="col-md-8">
          <input {...input} placeholder={label} type={type} className="form-control" />
          {hasError && <span className="text-danger">{meta.error}</span>}
        </div>
      </div>
    );
};

export const RadioGroup = (props) => {
        const { input, meta, label, options } = props;
        const hasError = meta.touched && meta.error;
        return (
            <div className="form-group">
                <label className="col-sm-4 control-label">{label}</label>
                <div className="col-sm-8">
                {options.map(o => {
                    // console.log('o.value === input.value', o.value, input.value);
                    return (
                        <label key={o.value} className="radio-inline col-sm-4">
                        <input type="radio" {...input} value={o.value} />{o.title}</label>
                    );
                })
            }
                {hasError && <span className="text-danger">{meta.error}</span>}
                </div>
            </div>
        );
};
