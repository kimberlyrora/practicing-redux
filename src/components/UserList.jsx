import React, { Component } from "react";
import { Table } from 'antd';
class UserList extends Component {
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
            nrosiniestro: '27566',
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
            nrosiniestro: '27566',
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
            nrosiniestro: '27566',
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
            nrosiniestro: '27566',
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
            nrosiniestro: '27566',
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
            nrosiniestro: '27566',
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
                />
            </React.Fragment>
        )
    }
}
export default UserList;