import React, { Component } from "react";
import { Table } from 'antd';
class UserList extends Component {
    state = {
        sortedInfo: null
    };
    
    handleChange = (sorter) => {
        let { sortedInfo } = this.state;
        sortedInfo = sortedInfo || {};
        console.log('Various parameters', sorter);
        this.setState({
            sortedInfo: sorter,
        });
    };

    sortEstado = (a, b) => {
        if (a === 'OnTime' && b === 'OnRisk') {
          return 1;
        }
    
        if (a === 'OnTime' && b === 'Overdue') {
          return 1;
        }
    
        if (a === 'OnRisk' && b === 'Overdue') {
          return 1;
        }
    
        if (a === 'OnRisk' && b === 'OnTime') {
          return -1;
        }
    
        if (a === 'Overdue' && b === 'OnTime') {
          return -1;
        }
    
        if (a === 'Overdue' && b === 'OnRisk') {
          return -1;
        }
    
        return 0;
    
      }
      
 sortNumbers(a, b) {
    if (!a) {
      return -1;
    }
  
    if (!b) {
      return 1;
    }
  
    return a - b;
  }
    render() {
        const columns = [{
            title: 'Tarea',
            dataIndex: 'tarea',
            key: 'tarea',
            className: 'claims-rrgg-table-task',
        },
        {
            title: 'Nro. Siniestro',
            dataIndex: 'nrosiniestro',
            key: 'nrosiniestro',
            sorter: (a,b) => this.sortNumbers(a.nrosiniestro, b.nrosiniestro)
        },
        {
            title: 'Nro.Caso',
            dataIndex: 'nrocaso',
            key: 'nrocaso',
        },
        {
            title: 'Nro.Poliza',
            dataIndex: 'numpoliza',
            key: 'numpoliza',
        },
        {
            title: 'Fecha Ocurrencia',
            dataIndex: 'fecocurrencia',
            key: 'fecocurrencia',
            align: 'center'
        },
        {
            title: 'Fecha Registro',
            dataIndex: 'fecregistro',
            key: 'fecregistro',
            align: 'center'

        },
        {
            title: 'Descripción',
            dataIndex: 'descripción',
            key: 'descripción',
            className: 'colDesc'
        },
        {
            title: 'Ramo',
            dataIndex: 'ramo',
            key: 'ramo',
        },
        {
            title: 'Moneda Reserva',
            dataIndex: 'codmoneda',
            key: 'codmoneda',
        },
        {
            title: 'Monto Reserva',
            dataIndex: 'montodelareserva',
            key: 'montodelareserva',
            align: 'right'
        },
        {
            title: 'Corredor',
            dataIndex: 'corredor',
            key: 'corredor',
        },
        {
            title: 'Asegurado',
            dataIndex: 'asegurado',
            key: 'asegurado',
        }];

        const data = [{
            key: '1',
            tarea: 'COMPLETAR DATOS',
            nrosiniestro: '27567',
            nrocaso: 'RG19003119',
            numpoliza: '500837',
            fecocurrencia: '30/08/2002',
            fecregistro: '25/06/2019',
            descripción: 'Fase2-tca',
            ramo: 'TRAN',
            codmoneda: 'YKYX EGG',
            montodelareserva: 'USD',
            corredor: '12,000.00',
            asegurado: 'WZFBAKW VPL',
        },
        {
            key: '1',
            tarea: 'COMPLETAR DATOS',
            nrosiniestro: '27528',
            nrocaso: 'RG19003119',
            numpoliza: '500837',
            fecocurrencia: '30/08/2002',
            fecregistro: '25/06/2019',
            descripción: 'Fase2-tca',
            ramo: 'TRAN',
            codmoneda: 'YKYX EGG',
            montodelareserva: 'USD',
            corredor: '12,000.00',
            asegurado: 'WZFBAKW VPL',
        },
        {
            key: '1',
            tarea: 'COMPLETAR DATOS',
            nrosiniestro: '27550',
            nrocaso: 'RG19003119',
            numpoliza: '500837',
            fecocurrencia: '30/08/2002',
            fecregistro: '25/06/2019',
            descripción: 'Fase2-tca',
            ramo: 'TRAN',
            codmoneda: 'YKYX EGG',
            montodelareserva: 'USD',
            corredor: '12,000.00',
            asegurado: 'WZFBAKW VPL',
        },
        {
            key: '1',
            tarea: 'ANALIZAR SINIESTRO',
            nrosiniestro: '00006',
            nrocaso: 'RG19003119',
            numpoliza: '500837',
            fecocurrencia: '30/08/2002',
            fecregistro: '25/06/2019',
            descripción: 'Fase2-tca',
            ramo: 'TRAN',
            codmoneda: 'YKYX EGG',
            montodelareserva: 'USD',
            corredor: '12,000.00',
            asegurado: 'WZFBAKW VPL',
        },
        {
            key: '1',
            tarea: 'ANALIZAR SINIESTRO',
            nrosiniestro: '27526',
            nrocaso: 'RG19003119',
            numpoliza: '500837',
            fecocurrencia: '30/08/2002',
            fecregistro: '25/06/2019',
            descripción: 'Fase2-tca',
            ramo: 'TRAN',
            codmoneda: 'YKYX EGG',
            montodelareserva: 'USD',
            corredor: '12,000.00',
            asegurado: 'WZFBAKW VPL',
        },
        {
            key: '1',
            tarea: 'ANALIZAR SINIESTRO',
            nrosiniestro: '27680',
            nrocaso: 'RG19003119',
            numpoliza: '500837',
            fecocurrencia: '30/08/2002',
            fecregistro: '25/06/2019',
            descripción: 'Fase2-tca',
            ramo: 'TRAN',
            codmoneda: 'YKYX EGG',
            montodelareserva: 'USD',
            corredor: '12,000.00',
            asegurado: 'WZFBAKW VPL',
        },
    ]
        return (
            <React.Fragment>
                <Table
                    columns={columns}
                    dataSource={data}
                    size='small'
                    scroll={{ x: '100%' }}
                    onChange={this.handleChange}
                />
            </React.Fragment>
        )
    }
}
export default UserList;