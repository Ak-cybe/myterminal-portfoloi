import { useState, useEffect } from 'react';
import { ChevronLeft, Cpu, MemoryStick, ShieldCheck, Wifi } from 'lucide-react';
import IDCard from './IDCard';

interface SidebarProps {
    profilePhoto?: string;
}

interface SystemStatus {
    cpu: number;
    memory: number;
    firewall: number;
    network: number;
}

const Sidebar = ({ profilePhoto }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [systemStatus, setSystemStatus] = useState<SystemStatus>({
        cpu: 18,
        memory: 78,
        firewall: 100,
        network: 59,
    });

    // Simulate dynamic system status updates
    useEffect(() => {
        const interval = setInterval(() => {
            setSystemStatus(prev => ({
                cpu: Math.max(5, Math.min(30, prev.cpu + (Math.random() - 0.5) * 10)),
                memory: Math.max(60, Math.min(90, prev.memory + (Math.random() - 0.5) * 5)),
                firewall: 100, // Always 100%
                network: Math.max(40, Math.min(80, prev.network + (Math.random() - 0.5) * 10)),
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <aside
            className={`
        fixed left-0 top-16 bottom-12 z-40
        bg-[#0a0a0a]/90 backdrop-blur-sm
        border-r border-[var(--cyber-green)]/30
        transition-all duration-300 ease-in-out
        flex flex-col
        ${isCollapsed ? 'w-12' : 'w-80'}
      `}
        >
            {/* Collapse Toggle Button */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3 top-4 w-6 h-6 bg-[#0d0d0d] border border-[var(--cyber-green)]/50 rounded-full flex items-center justify-center text-[var(--cyber-green)] hover:bg-[var(--cyber-green)]/20 transition-colors z-50"
            >
                <ChevronLeft
                    className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Sidebar Content */}
            <div className={`flex-1 overflow-hidden ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                {/* ID Card Section */}
                <div className="p-4 flex justify-center">
                    <IDCard profilePhoto={profilePhoto} />
                </div>

                {/* System Status Section */}
                <div className="px-4 pb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] text-[var(--cyber-green)]/60 uppercase tracking-wider">System Status</span>
                        <div className="flex-1 h-px bg-[var(--cyber-green)]/20" />
                        <Wifi className="w-3 h-3 text-[var(--cyber-green)] animate-pulse" />
                    </div>

                    <div className="space-y-2">
                        {/* CPU */}
                        <StatusBar
                            icon={<Cpu className="w-3 h-3" />}
                            label="CPU"
                            value={Math.round(systemStatus.cpu)}
                            color="cyber-green"
                        />

                        {/* Memory */}
                        <StatusBar
                            icon={<MemoryStick className="w-3 h-3" />}
                            label="MEMORY"
                            value={Math.round(systemStatus.memory)}
                            color="cyber-yellow"
                        />

                        {/* Firewall */}
                        <StatusBar
                            icon={<ShieldCheck className="w-3 h-3" />}
                            label="FIREWALL"
                            value={systemStatus.firewall}
                            color="cyber-green"
                        />

                        {/* Network */}
                        <StatusBar
                            icon={<Wifi className="w-3 h-3" />}
                            label="NETWORK"
                            value={Math.round(systemStatus.network)}
                            color="cyber-green"
                        />
                    </div>
                </div>
            </div>
        </aside>
    );
};

interface StatusBarProps {
    icon: React.ReactNode;
    label: string;
    value: number;
    color: 'cyber-green' | 'cyber-yellow' | 'cyber-red';
}

const StatusBar = ({ icon, label, value, color }: StatusBarProps) => {
    const getColorVar = () => {
        switch (color) {
            case 'cyber-green': return 'var(--cyber-green)';
            case 'cyber-yellow': return 'var(--cyber-yellow)';
            case 'cyber-red': return 'var(--cyber-red)';
            default: return 'var(--cyber-green)';
        }
    };

    return (
        <div className="flex items-center gap-2">
            <div className="text-[var(--cyber-green)]/60">{icon}</div>
            <div className="flex-1">
                <div className="flex justify-between items-center mb-0.5">
                    <span className="text-[9px] text-[var(--cyber-green)]/60">{label}</span>
                    <span
                        className="text-[9px] font-bold"
                        style={{ color: getColorVar() }}
                    >
                        {value}%
                    </span>
                </div>
                <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                            width: `${value}%`,
                            backgroundColor: getColorVar(),
                            boxShadow: `0 0 6px ${getColorVar()}`
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
