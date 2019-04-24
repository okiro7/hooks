
export function rendersytlebadge(_status) {
    switch (_status) {
    case 'INVQP': // Reabierto
        return 'red';
    case 'suspended': // para los estados suspendidos
    case 'INVHOLDUA': // Suspendido-Usuario ausente
    case 'INVUSO': // Suspendido - Usuario Operativo
    case 'INVHOLDPIU': // Suspendido por falta de informacion del usuario
    case 'INVHOLDPPP': // Suspendido en pruebas
    case 'INVHOLDPDU': // uspendido por disponibilidad del usuario
        return '#ffc107';
    case 'progress':// para los estados en progreso
    case 'INVWIP':
        return '#17a2b8';
    case 'INSTRE':
    case 'RE':
        return '#28a745';
    default:
        return '#007bff';
    }
}
