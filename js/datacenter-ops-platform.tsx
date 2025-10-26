import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Activity, Server, Shield, TrendingUp, AlertTriangle, CheckCircle, Clock, Database, Cpu, Thermometer, HardDrive, Users, FileText, Zap, MessageSquare, Menu, X } from 'lucide-react';

const DataCenterOpsPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Halo! Saya AI Assistant untuk DataCenterOps. Ada yang bisa saya bantu?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Data KPI Kuantitatif
  const kpiData = [
    { name: 'Uptime', value: 99.8, target: 99.5, unit: '%', icon: Server, color: '#10b981' },
    { name: 'Suhu Avg', value: 25.4, target: 27, unit: '°C', icon: Thermometer, color: '#3b82f6' },
    { name: 'CPU Load', value: 68, target: 80, unit: '%', icon: Cpu, color: '#f59e0b' },
    { name: 'Backup', value: 2, target: 2, unit: 'x/day', icon: HardDrive, color: '#8b5cf6' }
  ];

  // Data Timeline Maintenance
  const maintenanceData = [
    { month: 'Jan', preventif: 12, korektif: 3, audit: 2 },
    { month: 'Feb', preventif: 14, korektif: 2, audit: 1 },
    { month: 'Mar', preventif: 13, korektif: 4, audit: 2 },
    { month: 'Apr', preventif: 15, korektif: 1, audit: 1 },
    { month: 'Mei', preventif: 14, korektif: 2, audit: 2 },
    { month: 'Jun', preventif: 16, korektif: 3, audit: 1 }
  ];

  // Data Security Layers
  const securityData = [
    { layer: 'Fisik', score: 92 },
    { layer: 'Logis', score: 88 },
    { layer: 'Admin', score: 95 },
    { layer: 'Network', score: 90 },
    { layer: 'Data', score: 87 }
  ];

  // Data SOP Distribution
  const sopDistribution = [
    { name: 'Monitoring', value: 12, color: '#3b82f6' },
    { name: 'Maintenance', value: 15, color: '#10b981' },
    { name: 'Security', value: 10, color: '#f59e0b' },
    { name: 'Audit', value: 8, color: '#8b5cf6' },
    { name: 'Backup', value: 5, color: '#ec4899' }
  ];

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages([...chatMessages, 
      { role: 'user', content: chatInput },
      { role: 'assistant', content: `Saya memproses pertanyaan Anda tentang "${chatInput}". Berdasarkan SOP, saya merekomendasikan untuk mengecek dashboard monitoring dan melakukan validasi sistem terlebih dahulu.` }
    ]);
    setChatInput('');
  };

  // Flowchart Node Component
  const FlowNode = ({ title, subtitle, icon: Icon, color, delay }) => (
    <div 
      className="relative group animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-2xl border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]`}>
        <Icon className="w-8 h-8 mb-3 text-white" />
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{subtitle}</p>
      </div>
      <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-300"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ top: '10%', left: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ top: '60%', right: '10%', animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-800 rounded-lg transition">
              {isSidebarOpen ? <X /> : <Menu />}
            </button>
            <Activity className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DataCenterOps AI Platform
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-400">
              <Clock className="w-4 h-4 inline mr-2" />
              {currentTime.toLocaleTimeString('id-ID')}
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-green-500/20 rounded-lg border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">System Online</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative z-10">
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside className="w-64 bg-gray-900/60 backdrop-blur-lg border-r border-gray-800 min-h-screen p-4">
            <nav className="space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: Activity },
                { id: 'flowchart', label: 'SOP Flowchart', icon: Zap },
                { id: 'timeline', label: 'Timeline', icon: Clock },
                { id: 'security', label: 'Security Layers', icon: Shield },
                { id: 'kpi', label: 'KPI Reports', icon: TrendingUp },
                { id: 'ai', label: 'AI Assistant', icon: MessageSquare }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' 
                      : 'hover:bg-gray-800 text-gray-400'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Dashboard View */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
                <p className="text-gray-400">Real-time monitoring 50 SOP Data Center</p>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpiData.map((kpi, idx) => (
                  <div key={idx} className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <div className="flex items-center justify-between mb-4">
                      <kpi.icon className="w-8 h-8" style={{ color: kpi.color }} />
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        kpi.value <= kpi.target ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {kpi.value <= kpi.target ? 'NORMAL' : 'WARNING'}
                      </span>
                    </div>
                    <h3 className="text-gray-400 text-sm mb-1">{kpi.name}</h3>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold" style={{ color: kpi.color }}>{kpi.value}</span>
                      <span className="text-gray-500 mb-1">{kpi.unit}</span>
                    </div>
                    <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${(kpi.value / kpi.target) * 100}%`,
                          backgroundColor: kpi.color
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Target: {kpi.target} {kpi.unit}</p>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Maintenance Timeline */}
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Maintenance Timeline (6 Bulan)</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={maintenanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                      />
                      <Legend />
                      <Bar dataKey="preventif" fill="#3b82f6" name="Preventif" />
                      <Bar dataKey="korektif" fill="#f59e0b" name="Korektif" />
                      <Bar dataKey="audit" fill="#10b981" name="Audit" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* SOP Distribution */}
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Distribusi 50 SOP</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={sopDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {sopDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Flowchart SOP View */}
          {activeTab === 'flowchart' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Interactive SOP Flowchart</h2>
                <p className="text-gray-400">Alur utama operasional data center</p>
              </div>

              <div className="relative">
                {/* Flow Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <FlowNode 
                    title="1. MONITORING" 
                    subtitle="25 SOP Real-time"
                    icon={Activity}
                    color="from-blue-600 to-blue-800"
                    delay={0}
                  />
                  <FlowNode 
                    title="2. MAINTENANCE" 
                    subtitle="Preventif & Korektif"
                    icon={Zap}
                    color="from-green-600 to-green-800"
                    delay={200}
                  />
                  <FlowNode 
                    title="3. AUDIT" 
                    subtitle="Evaluasi Berkala"
                    icon={FileText}
                    color="from-purple-600 to-purple-800"
                    delay={400}
                  />
                  <FlowNode 
                    title="4. EVALUASI" 
                    subtitle="Improvement"
                    icon={TrendingUp}
                    color="from-orange-600 to-orange-800"
                    delay={600}
                  />
                </div>

                {/* Connection Lines */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <line x1="20%" y1="50%" x2="45%" y2="50%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                  </line>
                  <line x1="45%" y1="50%" x2="70%" y2="50%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                  </line>
                  <line x1="70%" y1="50%" x2="95%" y2="50%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                  </line>
                </svg>
              </div>

              {/* Detail Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Activity className="w-6 h-6 text-blue-400" />
                    SOP Kuantitatif (25 Poin)
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Monitoring daya & suhu</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Uptime & availability tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Backup otomatis harian</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Kapasitas storage & bandwidth</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Response time monitoring</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-purple-400" />
                    SOP Kualitatif (25 Poin)
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> Pelatihan operator rutin</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> Audit dokumentasi SOP</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> Evaluasi kualitas layanan</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> Komunikasi tim efektif</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> Kedisiplinan & compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Security Layers View */}
          {activeTab === 'security' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Security Layers Matrix</h2>
                <p className="text-gray-400">3 lapisan keamanan: Fisik → Logis → Administratif</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Radar Chart */}
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Security Score Overview</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={securityData}>
                      <PolarGrid stroke="#374151" />
                      <PolarAngleAxis dataKey="layer" stroke="#9ca3af" />
                      <PolarRadiusAxis stroke="#9ca3af" />
                      <Radar name="Security" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                {/* Security Details */}
                <div className="space-y-4">
                  {securityData.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Shield className="w-6 h-6 text-blue-400" />
                          <span className="font-bold">{item.layer}</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-400">{item.score}%</span>
                      </div>
                      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Alerts */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  Recent Security Events
                </h3>
                <div className="space-y-3">
                  {[
                    { time: '10:24', level: 'info', msg: 'Akses ruang server berhasil - User: Admin01' },
                    { time: '09:15', level: 'warning', msg: 'Percobaan login gagal 3x - IP: 192.168.1.45' },
                    { time: '08:30', level: 'success', msg: 'Backup keamanan selesai - 100% success' }
                  ].map((event, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
                      <span className="text-xs text-gray-500">{event.time}</span>
                      <div className={`w-2 h-2 rounded-full ${
                        event.level === 'success' ? 'bg-green-400' :
                        event.level === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                      }`}></div>
                      <span className="text-sm text-gray-300">{event.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Timeline View */}
          {activeTab === 'timeline' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Maintenance Timeline</h2>
                <p className="text-gray-400">Jadwal & progress kegiatan maintenance</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={maintenanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="preventif" stroke="#3b82f6" strokeWidth={3} name="Preventif" />
                    <Line type="monotone" dataKey="korektif" stroke="#f59e0b" strokeWidth={3} name="Korektif" />
                    <Line type="monotone" dataKey="audit" stroke="#10b981" strokeWidth={3} name="Audit" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Upcoming Tasks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Backup Server DB', date: '27 Okt 2025', priority: 'high', progress: 75 },
                  { title: 'Audit Dokumentasi', date: '28 Okt 2025', priority: 'medium', progress: 40 },
                  { title: 'Pemeliharaan AC', date: '30 Okt 2025', priority: 'low', progress: 20 }
                ].map((task, idx) => (
                  <div key={idx} className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className={`text-xs px-2 py-1 rounded ${
                        task.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        task.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {task.priority.toUpperCase()}
                      </span>
                    </div>
                    <h4 className="font-bold mb-1">{task.title}</h4>
                    <p className="text-sm text-gray-400 mb-3">{task.date}</p>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{task.progress}% Complete</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* KPI Reports View */}
          {activeTab === 'kpi' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">KPI Reports & Analytics</h2>
                  <p className="text-gray-400">Ringkasan 50 indikator kinerja</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition">
                  <Database className="w-4 h-4" />
                  Export Excel
                </button>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase">Kategori</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase">Aspek</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase">Indikator</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase">Target</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase">Aktual</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {[
                      { cat: 'Kuantitatif', aspect: 'Monitoring', ind: 'Suhu Server', target: '< 27°C', actual: '25.4°C', status: 'success' },
                      { cat: 'Kuantitatif', aspect: 'Backup', ind: 'Frekuensi Backup', target: '2x/hari', actual: '2x/hari', status: 'success' },
                      { cat: 'Kuantitatif', aspect: 'Uptime', ind: 'Server Availability', target: '> 99.5%', actual: '99.8%', status: 'success' },
                      { cat: 'Kualitatif', aspect: 'SDM', ind: 'Pelatihan Operator', target: '4 sesi/bulan', actual: '4 sesi', status: 'success' },
                      { cat: 'Kualitatif', aspect: 'Audit', ind: 'Dokumentasi SOP', target: '95% lengkap', actual: '92%', status: 'warning' },
                      { cat: 'Kuantitatif', aspect: 'Security', ind: 'Insiden Keamanan', target: '0 insiden', actual: '1 minor', status: 'warning' }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-700/30 transition">
                        <td className="px-6 py-4 text-sm text-gray-300">{row.cat}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">{row.aspect}</td>
                        <td className="px-6 py-4 text-sm font-medium">{row.ind}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{row.target}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-blue-400">{row.actual}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                            row.status === 'success' ? 'bg-green-500/20 text-green-400' :
                            row.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {row.status === 'success' ? <CheckCircle className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                            {row.status === 'success' ? 'NORMAL' : 'PERLU PERHATIAN'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">SOP Tercapai</p>
                      <p className="text-3xl font-bold text-green-400">42/50</p>
                    </div>
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Perlu Review</p>
                      <p className="text-3xl font-bold text-yellow-400">6/50</p>
                    </div>
                    <AlertTriangle className="w-12 h-12 text-yellow-400" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Compliance Rate</p>
                      <p className="text-3xl font-bold text-blue-400">84%</p>
                    </div>
                    <TrendingUp className="w-12 h-12 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Assistant View */}
          {activeTab === 'ai' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">AI Assistant Console</h2>
                <p className="text-gray-400">Tanya AI tentang SOP, KPI, atau rekomendasi sistem</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chat Interface */}
                <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 overflow-hidden flex flex-col" style={{ height: '600px' }}>
                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {chatMessages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-xl p-4 ${
                          msg.role === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-700 text-gray-100'
                        }`}>
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-gray-700">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Tanya tentang SOP, KPI, atau rekomendasi..."
                        className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Kirim
                      </button>
                    </div>
                  </div>
                </div>

                {/* AI Features Panel */}
                <div className="space-y-4">
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      Quick Actions
                    </h3>
                    <div className="space-y-2">
                      {[
                        'Jelaskan SOP #17',
                        'Analisis KPI bulan ini',
                        'Rekomendasi maintenance',
                        'Status keamanan sistem',
                        'Generate laporan audit'
                      ].map((action, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setChatInput(action);
                            setTimeout(handleSendMessage, 100);
                          }}
                          className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/30">
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-purple-400" />
                      AI Insights
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      Sistem mendeteksi 3 area yang perlu perhatian berdasarkan data 7 hari terakhir
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
                        Suhu server rutin naik 2°C saat peak hours
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5"></div>
                        Dokumentasi SOP perlu update (92%)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></div>
                        Backup berjalan optimal 100%
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DataCenterOpsPlatform