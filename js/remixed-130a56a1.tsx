import React, { useState } from 'react';
import { Server, Activity, Shield, AlertTriangle, CheckCircle, TrendingUp, Database, Zap, ThermometerSun, HardDrive, Lock, Users, FileText, BarChart3, Download } from 'lucide-react';

const DataCenterSOPDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Data SOP 50 Poin
  const quantitativeData = [
    { id: 1, aspect: "Kapasitas Daya Listrik", indicator: "2N redundancy", target: "Zero downtime", frequency: "Continuous", value: 99.98 },
    { id: 2, aspect: "Suhu Ruangan", indicator: "20-23°C", target: "45-55% humidity", frequency: "Every 5 min", value: 21.5 },
    { id: 3, aspect: "Pemeliharaan UPS", indicator: "ISO/IEC 14764:2006", target: "Weekly", frequency: "Weekly", value: 100 },
    { id: 4, aspect: "Backup Data", indicator: "Otomatis 24 jam", target: "≤ 3 jam durasi", frequency: "Daily", value: 100 },
    { id: 5, aspect: "Audit Kapasitas Rack", indicator: "Server capacity check", target: "Monthly", frequency: "Monthly", value: 95 },
    { id: 6, aspect: "Pengujian Genset", indicator: "Minimal 1 jam", target: "Weekly test", frequency: "Weekly", value: 100 },
    { id: 7, aspect: "Dokumentasi Log Server", indicator: "Max 1 GB/session", target: "Per backup", frequency: "Daily", value: 0.8 },
    { id: 8, aspect: "Penggantian Filter Udara", indicator: "Tiap 90 hari", target: "Quarterly", frequency: "90 days", value: 100 },
    { id: 9, aspect: "Pemantauan Suhu Otomatis", indicator: "Every 5 minutes", target: "Real-time", frequency: "5 min", value: 100 },
    { id: 10, aspect: "Availability Tier 3", indicator: "99.982%", target: "SNI 8799", frequency: "Continuous", value: 99.98 },
    { id: 11, aspect: "Kapasitas Pendingin", indicator: "12-15 kW/rack", target: "Per rack", frequency: "Continuous", value: 13.5 },
    { id: 12, aspect: "Kecepatan Jaringan", indicator: "≥ 10 Gbps", target: "Internal service", frequency: "Continuous", value: 10 },
    { id: 13, aspect: "Pemeriksaan Keamanan", indicator: "Security check", target: "Monthly", frequency: "30 days", value: 100 },
    { id: 14, aspect: "Maximum Downtime", indicator: "≤ 1.6 jam/tahun", target: "Annual", frequency: "Yearly", value: 1.2 },
    { id: 15, aspect: "Kapasitas Penyimpanan", indicator: "20% cadangan kosong", target: "Reserve capacity", frequency: "Continuous", value: 22 },
    { id: 16, aspect: "Jumlah CCTV", indicator: "8 titik/100m²", target: "Coverage", frequency: "Continuous", value: 8 },
    { id: 17, aspect: "Pencatatan Daya Rack", indicator: "Daily log", target: "Per rack", frequency: "Daily", value: 100 },
    { id: 18, aspect: "Variasi Arus Listrik", indicator: "< 2% dari nominal", target: "Stability", frequency: "Continuous", value: 1.5 },
    { id: 19, aspect: "Kecepatan Pemulihan", indicator: "≤ 1 jam/insiden", target: "Recovery time", frequency: "Per incident", value: 0.8 },
    { id: 20, aspect: "Durasi Backup", indicator: "≤ 3 jam", target: "Daily completion", frequency: "Daily", value: 2.5 },
    { id: 21, aspect: "Latihan Evakuasi", indicator: "2x per tahun", target: "Safety drill", frequency: "Bi-annual", value: 2 },
    { id: 22, aspect: "Pembersihan Server Room", indicator: "Weekly", target: "Cleanliness", frequency: "Weekly", value: 100 },
    { id: 23, aspect: "Pemeriksaan Suhu & Debu", indicator: "Weekly check", target: "Environment", frequency: "Weekly", value: 100 },
    { id: 24, aspect: "Penggantian Baterai UPS", indicator: "Tiap 2 tahun", target: "Battery life", frequency: "24 months", value: 100 },
    { id: 25, aspect: "Laporan Pemeliharaan", indicator: "< 24 jam", target: "Post-work", frequency: "Per task", value: 12 }
  ];

  const qualitativeData = [
    { id: 26, aspect: "Kebijakan Keamanan", standard: "ISO/IEC 27002:2013", process: "Security policy framework" },
    { id: 27, aspect: "Tata Kelola Akses Fisik", standard: "Biometric + Card", process: "Finger scan & access control" },
    { id: 28, aspect: "Prosedur Inspeksi", standard: "Cross-unit communication", process: "Maintainer-Operator-Auditor" },
    { id: 29, aspect: "Disaster Recovery Plan", standard: "40 km remote site", process: "Active DRC location" },
    { id: 30, aspect: "Change Management", standard: "Documented & validated", process: "Formal approval workflow" },
    { id: 31, aspect: "Pelatihan Operator", standard: "2x per tahun", process: "Internal competency standard" },
    { id: 32, aspect: "Evaluasi Risiko", standard: "Quarterly", process: "Risk matrix methodology" },
    { id: 33, aspect: "Audit Eksternal", standard: "ISO 9001 annual", process: "External certification audit" },
    { id: 34, aspect: "Pengawasan Pengunjung", standard: "Digital entry log", process: "Visitor access monitoring" },
    { id: 35, aspect: "Pemeliharaan Jaringan", standard: "SLA controlled", process: "Service Level Agreement" },
    { id: 36, aspect: "Patch Management", standard: "30-day vendor cycle", process: "Update scheduling" },
    { id: 37, aspect: "Sistem Alarm Kebakaran", standard: "EPO simulation test", process: "Emergency Power Off drill" },
    { id: 38, aspect: "Eskalasi Gangguan", standard: "3-level priority", process: "Incident escalation tier" },
    { id: 39, aspect: "Monitoring Dashboard", standard: "Real-time integration", process: "Centralized monitoring" },
    { id: 40, aspect: "Dokumentasi Pekerjaan", standard: "Head unit validation", process: "Work documentation approval" },
    { id: 41, aspect: "Integritas Data", standard: "Checksum & hashing", process: "Data integrity verification" },
    { id: 42, aspect: "Kebersihan & Ergonomi", standard: "IT supervisor check", process: "Environment quality control" },
    { id: 43, aspect: "Peminjaman Perangkat", standard: "Formal permission", process: "Equipment loan policy" },
    { id: 44, aspect: "Penghapusan Data", standard: "DLP compliance", process: "Server decommission protocol" },
    { id: 45, aspect: "Komunikasi Internal", standard: "Official channel", process: "Incident communication" },
    { id: 46, aspect: "Evaluasi Keluhan", standard: "ISO audit report", process: "Customer complaint handling" },
    { id: 47, aspect: "Mekanisme Restore", standard: "Periodic testing", process: "Data restoration drill" },
    { id: 48, aspect: "Tim Keamanan Siber", standard: "CompTIA Security+", process: "Certified cybersecurity team" },
    { id: 49, aspect: "Review SOP", standard: "Annual review", process: "Yearly SOP evaluation" },
    { id: 50, aspect: "Evaluasi Kinerja Tim", standard: "KPI-based", process: "Downtime, incident, satisfaction" }
  ];

  // Export to CSV function
  const exportToCSV = () => {
    const headers = ['No', 'Kategori', 'Aspek', 'Indikator/Standar', 'Target/Proses', 'Frekuensi', 'Nilai/Status'];
    
    const quantRows = quantitativeData.map(item => [
      item.id,
      'Kuantitatif',
      item.aspect,
      item.indicator,
      item.target,
      item.frequency,
      item.value
    ]);
    
    const qualRows = qualitativeData.map(item => [
      item.id,
      'Kualitatif',
      item.aspect,
      item.standard,
      item.process,
      '-',
      'Implemented'
    ]);
    
    const csvContent = [
      headers.join(','),
      ...quantRows.map(row => row.join(',')),
      ...qualRows.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SOP_DataCenter_50Poin.csv';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Server className="w-10 h-10 text-cyan-400" />
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                SOP Data Center Dashboard
              </h1>
              <p className="text-slate-400 text-sm">50 Poin Standar Operasional Prosedur (25 Kuantitatif + 25 Kualitatif)</p>
            </div>
          </div>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            <Download className="w-4 h-4" />
            Download CSV
          </button>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex gap-2 bg-slate-800/50 p-1 rounded-lg backdrop-blur">
          {['overview', 'quantitative', 'qualitative', 'monitoring', 'security', 'maintenance'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md transition-all capitalize ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Main Flowchart */}
          <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              Flowchart Utama: Struktur Manajemen SOP
            </h2>
            <div className="flex items-center justify-between gap-4">
              {['Monitoring', 'Maintenance', 'Audit', 'Evaluasi'].map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="flex-1 bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-lg border border-cyan-500/30 text-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold">{idx + 1}</span>
                    </div>
                    <h3 className="font-bold text-lg">{step}</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {idx === 0 && 'Real-time tracking'}
                      {idx === 1 && 'Scheduled & reactive'}
                      {idx === 2 && 'ISO compliance check'}
                      {idx === 3 && 'KPI & improvement'}
                    </p>
                  </div>
                  {idx < 3 && (
                    <div className="text-cyan-400 text-2xl">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* KPI Summary Cards */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 p-4 rounded-xl border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-slate-300">Availability</span>
              </div>
              <div className="text-3xl font-bold text-green-400">99.98%</div>
              <div className="text-xs text-slate-400 mt-1">Tier 3 SNI 8799</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-4 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <ThermometerSun className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-300">Temperature</span>
              </div>
              <div className="text-3xl font-bold text-blue-400">21.5°C</div>
              <div className="text-xs text-slate-400 mt-1">Target: 20-23°C</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 p-4 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-slate-300">Power Capacity</span>
              </div>
              <div className="text-3xl font-bold text-purple-400">2N</div>
              <div className="text-xs text-slate-400 mt-1">Redundancy Active</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/40 p-4 rounded-xl border border-orange-500/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-slate-300">Max Downtime</span>
              </div>
              <div className="text-3xl font-bold text-orange-400">1.2h</div>
              <div className="text-xs text-slate-400 mt-1">Target: ≤ 1.6h/year</div>
            </div>
          </div>

          {/* Category Overview */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                25 Aspek Kuantitatif
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Berbasis angka, frekuensi, kapasitas, dan standar terukur untuk memastikan operasional optimal dan compliance.
              </p>
              <div className="space-y-2">
                {['Kapasitas & Daya', 'Suhu & Environment', 'Backup & Storage', 'Network & Performance', 'Maintenance Schedule'].map(cat => (
                  <div key={cat} className="flex items-center justify-between bg-slate-700/50 p-2 rounded">
                    <span className="text-sm">{cat}</span>
                    <span className="text-xs text-cyan-400">5 poin</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-purple-500/20">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                25 Aspek Kualitatif
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Berbasis proses, kebijakan, keamanan, dan mutu sesuai ISO 9001:2015 dan SNI 8799.
              </p>
              <div className="space-y-2">
                {['Security & Access Control', 'Disaster Recovery', 'Change Management', 'Training & Certification', 'Audit & Compliance'].map(cat => (
                  <div key={cat} className="flex items-center justify-between bg-slate-700/50 p-2 rounded">
                    <span className="text-sm">{cat}</span>
                    <span className="text-xs text-purple-400">5 poin</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quantitative Tab */}
      {activeTab === 'quantitative' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            25 Aspek Kuantitatif
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quantitativeData.map(item => (
              <div key={item.id} className="bg-slate-800/40 backdrop-blur p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-xs text-cyan-400 mb-1">#{item.id}</div>
                    <h3 className="font-bold">{item.aspect}</h3>
                    <p className="text-sm text-slate-400">{item.indicator}</p>
                  </div>
                  <div className="bg-cyan-500/20 px-2 py-1 rounded text-xs text-cyan-400">
                    {item.frequency}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Target: {item.target}</span>
                    <span className="text-cyan-400 font-bold">{item.value}{typeof item.value === 'number' && item.value < 20 ? (item.id === 25 ? 'h' : item.id === 7 ? 'GB' : '') : '%'}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all"
                      style={{ width: `${item.value > 20 ? item.value : (item.value / 25) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Qualitative Tab */}
      {activeTab === 'qualitative' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-400" />
            25 Aspek Kualitatif
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {qualitativeData.map(item => (
              <div key={item.id} className="bg-slate-800/40 backdrop-blur p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-xs text-purple-400 mb-1">#{item.id}</div>
                    <h3 className="font-bold">{item.aspect}</h3>
                    <p className="text-sm text-slate-400">{item.process}</p>
                  </div>
                  <div className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-400">
                    Active
                  </div>
                </div>
                <div className="mt-3 bg-slate-700/30 px-3 py-2 rounded">
                  <div className="text-xs text-slate-400">Standard:</div>
                  <div className="text-sm text-purple-400 font-medium">{item.standard}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Monitoring Tab */}
      {activeTab === 'monitoring' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-cyan-400" />
            Diagram Monitoring Data Center
          </h2>
          
          {/* Real-time Monitoring Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-6 rounded-xl border border-blue-500/30">
              <ThermometerSun className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold mb-2">Suhu & Kelembaban</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Suhu:</span>
                  <span className="text-cyan-400 font-bold">21.5°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Kelembaban:</span>
                  <span className="text-cyan-400 font-bold">48%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Update:</span>
                  <span className="text-green-400 text-xs">Every 5 min</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 p-6 rounded-xl border border-purple-500/30">
              <Zap className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-bold mb-2">Daya & Energi</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Redundancy:</span>
                  <span className="text-cyan-400 font-bold">2N Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Variasi:</span>
                  <span className="text-cyan-400 font-bold">1.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Per Rack:</span>
                  <span className="text-green-400 text-xs">13.5 kW</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 p-6 rounded-xl border border-green-500/30">
              <Database className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="font-bold mb-2">Performance Server</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Availability:</span>
                  <span className="text-cyan-400 font-bold">99.98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Network:</span>
                  <span className="text-cyan-400 font-bold">10 Gbps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400">Recovery:</span>
                  <span className="text-green-400 text-xs">≤ 1 hour</span>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring Flow Diagram */}
          <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
            <h3 className="font-bold text-lg mb-4">Alur Monitoring Real-time</h3>
            <div className="flex items-center justify-between">
              {[
                { icon: ThermometerSun, label: 'Sensors', color: 'blue' },
                { icon: Activity, label: 'Data Collection', color: 'cyan' },
                { icon: BarChart3, label: 'Dashboard', color: 'purple' },
                { icon: AlertTriangle, label: 'Alert System', color: 'orange' },
                { icon: Users, label: 'Response Team', color: 'green' }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={idx}>
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-${step.color}-500/20 border-2 border-${step.color}-500 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        <Icon className={`w-8 h-8 text-${step.color}-400`} />
                      </div>
                      <div className="text-sm font-medium">{step.label}</div>
                    </div>
                    {idx < 4 && <div className="text-cyan-400 text-xl">→</div>}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Backup Schedule */}
          <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-cyan-400" />
              Jadwal Backup & Storage
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { time: '00:00', type: 'Full Backup', status: 'Completed', duration: '2.5h' },
                { time: '06:00', type: 'Incremental', status: 'Completed', duration: '0.8h' },
                { time: '12:00', type: 'Incremental', status: 'Completed', duration: '0.7h' },
                { time: '18:00', type: 'Incremental', status: 'Scheduled', duration: '~0.8h' }
              ].map((backup, idx) => (
                <div key={idx} className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-cyan-400 font-bold text-lg mb-1">{backup.time}</div>
                  <div className="text-sm mb-2">{backup.type}</div>
                  <div className={`text-xs px-2 py-1 rounded inline-block ${
                    backup.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {backup.status}
                  </div>
                  <div className="text-xs text-slate-400 mt-2">Duration: {backup.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-400" />
            Diagram Layer Keamanan Data Center
          </h2>

          {/* Security Layers */}
          <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-purple-500/20">
            <h3 className="font-bold text-lg mb-6">3 Layer Security Architecture</h3>
            <div className="space-y-4">
              {/* Physical Layer */}
              <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500/20 p-3 rounded-lg">
                    <Lock className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">Layer 1: Keamanan Fisik</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-700/50 p-3 rounded">
                        <div className="text-xs text-slate-400 mb-1">Access Control</div>
                        <div className="text-sm font-medium">Biometric + Card</div>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded">
                        <div className="text-xs text-slate-400 mb-1">CCTV Coverage</div>
                        <div className="text-sm font-medium">8 unit/100m²</div>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded">
                        <div className="text-xs text-slate-400 mb-1">Visitor Log</div>
                        <div className="text-sm font-medium">Digital Entry</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logical Layer */}
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <Database className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">Layer 2: Keamanan Logis</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-700/50 p-3 rounded">
                        <div className="text-xs text-slate-400 mb-1">Data Integrity</div>
                        <div className="text-sm font-medium">Checksum & Hash</div>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded">
                        <div className="text-xs text-slate-400 mb-1">Network Security</div>
                        <div className="text-sm font-medium">SLA Controlled</div>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded">
                        <div className="text-xs text-slate-400 mb-1">Patch Management</div>
                        <div className="text-sm font-medium">30-day Cycle</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Administrative Layer */}
              <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 p-6 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">Layer 3: Keamanan Administratif</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-700/50 p-3 rounded">
                        <div className="text-xs text-slate-400 mb-1">Policy Standard</div>
                        <div className="text-sm font-medium">ISO 27002:2013</div>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded">
                        <div className="text-xs text-slate-400 mb-1">Team Certification</div>
                        <div className="text-sm font-medium">CompTIA Sec+</div>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded">
                        <div className="text-xs text-slate-400 mb-1">Training</div>
                        <div className="text-sm font-medium">2x per year</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Incident Escalation */}
          <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-orange-500/20">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              Workflow Eskalasi Gangguan (3 Level Priority)
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-900/30 p-4 rounded-lg border-2 border-green-500/50">
                <div className="text-center mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">P1</span>
                  </div>
                  <h4 className="font-bold text-green-400">Low Priority</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-slate-700/50 p-2 rounded">Response: 4-8 jam</div>
                  <div className="bg-slate-700/50 p-2 rounded">Handler: Tech Support</div>
                  <div className="bg-slate-700/50 p-2 rounded">Impact: Minimal</div>
                </div>
              </div>

              <div className="bg-orange-900/30 p-4 rounded-lg border-2 border-orange-500/50">
                <div className="text-center mb-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">P2</span>
                  </div>
                  <h4 className="font-bold text-orange-400">Medium Priority</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-slate-700/50 p-2 rounded">Response: 1-2 jam</div>
                  <div className="bg-slate-700/50 p-2 rounded">Handler: Senior Tech</div>
                  <div className="bg-slate-700/50 p-2 rounded">Impact: Moderate</div>
                </div>
              </div>

              <div className="bg-red-900/30 p-4 rounded-lg border-2 border-red-500/50">
                <div className="text-center mb-3">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">P3</span>
                  </div>
                  <h4 className="font-bold text-red-400">Critical Priority</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-slate-700/50 p-2 rounded">Response: ≤ 15 min</div>
                  <div className="bg-slate-700/50 p-2 rounded">Handler: IT Manager</div>
                  <div className="bg-slate-700/50 p-2 rounded">Impact: Severe</div>
                </div>
              </div>
            </div>
          </div>

          {/* DRC & Emergency */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-cyan-400" />
                Disaster Recovery Center (DRC)
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between bg-slate-700/50 p-3 rounded">
                  <span className="text-sm text-slate-400">Location</span>
                  <span className="font-medium text-cyan-400">≥ 40 km away</span>
                </div>
                <div className="flex justify-between bg-slate-700/50 p-3 rounded">
                  <span className="text-sm text-slate-400">Status</span>
                  <span className="font-medium text-green-400">Active</span>
                </div>
                <div className="flex justify-between bg-slate-700/50 p-3 rounded">
                  <span className="text-sm text-slate-400">Sync Type</span>
                  <span className="font-medium">Real-time</span>
                </div>
                <div className="flex justify-between bg-slate-700/50 p-3 rounded">
                  <span className="text-sm text-slate-400">Test Frequency</span>
                  <span className="font-medium">Quarterly</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-red-500/20">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Emergency Procedures
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between bg-slate-700/50 p-3 rounded">
                  <span className="text-sm text-slate-400">Fire Alarm System</span>
                  <span className="font-medium text-green-400">EPO Active</span>
                </div>
                <div className="flex justify-between bg-slate-700/50 p-3 rounded">
                  <span className="text-sm text-slate-400">Evacuation Drill</span>
                  <span className="font-medium">2x per year</span>
                </div>
                <div className="flex justify-between bg-slate-700/50 p-3 rounded">
                  <span className="text-sm text-slate-400">EPO Test</span>
                  <span className="font-medium">Simulation</span>
                </div>
                <div className="flex justify-between bg-slate-700/50 p-3 rounded">
                  <span className="text-sm text-slate-400">Communication</span>
                  <span className="font-medium">Official Channel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Maintenance Tab */}
      {activeTab === 'maintenance' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-cyan-400" />
            Siklus Pemeliharaan & Evaluasi Mutu
          </h2>

          {/* Maintenance Cycle Diagram */}
          <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
            <h3 className="font-bold text-lg mb-6">Siklus PDCA (Plan-Do-Check-Act)</h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { phase: 'PLAN', icon: FileText, color: 'blue', desc: 'Rencanakan SOP & jadwal maintenance' },
                { phase: 'DO', icon: Activity, color: 'green', desc: 'Eksekusi pemeliharaan sesuai jadwal' },
                { phase: 'CHECK', icon: BarChart3, color: 'orange', desc: 'Audit & monitoring performance' },
                { phase: 'ACT', icon: TrendingUp, color: 'purple', desc: 'Improvement & update SOP' }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className={`bg-${step.color}-900/30 p-6 rounded-lg border-2 border-${step.color}-500/50`}>
                    <div className={`w-16 h-16 bg-${step.color}-500 rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-center mb-2">{step.phase}</h4>
                    <p className="text-xs text-slate-400 text-center">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Maintenance Schedule */}
          <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
            <h3 className="font-bold text-lg mb-4">Jadwal Pemeliharaan Berkala</h3>
            <div className="space-y-3">
              {[
                { task: 'Pemeliharaan UPS', frequency: 'Weekly', last: '2024-10-20', next: '2024-10-27', status: 'On Track' },
                { task: 'Pengujian Genset', frequency: 'Weekly', last: '2024-10-19', next: '2024-10-26', status: 'Due Today' },
                { task: 'Pembersihan Server Room', frequency: 'Weekly', last: '2024-10-21', next: '2024-10-28', status: 'On Track' },
                { task: 'Pemeriksaan Suhu & Debu', frequency: 'Weekly', last: '2024-10-22', next: '2024-10-29', status: 'On Track' },
                { task: 'Audit Kapasitas Rack', frequency: 'Monthly', last: '2024-10-01', next: '2024-11-01', status: 'On Track' },
                { task: 'Pemeriksaan Keamanan', frequency: 'Monthly', last: '2024-10-05', next: '2024-11-05', status: 'On Track' },
                { task: 'Penggantian Filter Udara', frequency: 'Quarterly', last: '2024-08-15', next: '2024-11-15', status: 'On Track' },
                { task: 'Evaluasi Risiko', frequency: 'Quarterly', last: '2024-09-01', next: '2024-12-01', status: 'On Track' },
                { task: 'Pelatihan Operator', frequency: 'Bi-annual', last: '2024-06-15', next: '2024-12-15', status: 'On Track' },
                { task: 'Latihan Evakuasi', frequency: 'Bi-annual', last: '2024-05-20', next: '2025-05-20', status: 'On Track' },
                { task: 'Audit Eksternal ISO', frequency: 'Annual', last: '2024-03-10', next: '2025-03-10', status: 'On Track' },
                { task: 'Review SOP', frequency: 'Annual', last: '2024-01-15', next: '2025-01-15', status: 'On Track' },
                { task: 'Penggantian Baterai UPS', frequency: '2 Years', last: '2023-06-01', next: '2025-06-01', status: 'On Track' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-700/30 p-3 rounded hover:bg-slate-700/50 transition-all">
                  <div className="flex-1">
                    <h4 className="font-medium">{item.task}</h4>
                    <div className="text-xs text-slate-400 mt-1">
                      Last: {item.last} | Next: {item.next}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-400">{item.frequency}</span>
                    <span className={`px-3 py-1 rounded text-xs font-medium ${
                      item.status === 'Due Today' ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Change Management Process */}
          <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-purple-500/20">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-400" />
              Change Management Workflow
            </h3>
            <div className="flex items-center justify-between gap-3">
              {[
                { step: 'Request', desc: 'Submit change request', status: 'Start' },
                { step: 'Review', desc: 'Technical assessment', status: 'Evaluate' },
                { step: 'Approval', desc: 'Management sign-off', status: 'Validate' },
                { step: 'Test', desc: 'Staging environment', status: 'Verify' },
                { step: 'Deploy', desc: 'Production rollout', status: 'Execute' },
                { step: 'Document', desc: 'Update SOP & log', status: 'Complete' }
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 text-center">
                    <div className="bg-purple-500/20 border-2 border-purple-500 rounded-lg p-4 mb-2">
                      <div className="font-bold mb-1">{item.step}</div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                    <div className="text-xs text-purple-400 font-medium">{item.status}</div>
                  </div>
                  {idx < 5 && <div className="text-purple-400 text-xl">→</div>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* KPI Performance Dashboard */}
          <div className="bg-slate-800/40 backdrop-blur p-6 rounded-xl border border-cyan-500/20">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              KPI Evaluasi Kinerja Tim
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 p-6 rounded-lg border border-green-500/30">
                <h4 className="text-sm text-slate-400 mb-2">Downtime Target</h4>
                <div className="text-3xl font-bold text-green-400 mb-2">1.2h</div>
                <div className="text-xs text-slate-400">Target: ≤ 1.6h/year</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="text-xs text-green-400 mt-1">✓ 25% below target</div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-6 rounded-lg border border-blue-500/30">
                <h4 className="text-sm text-slate-400 mb-2">Incident Resolution</h4>
                <div className="text-3xl font-bold text-blue-400 mb-2">0.8h</div>
                <div className="text-xs text-slate-400">Target: ≤ 1h/incident</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="text-xs text-blue-400 mt-1">✓ 20% faster</div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 p-6 rounded-lg border border-purple-500/30">
                <h4 className="text-sm text-slate-400 mb-2">Customer Satisfaction</h4>
                <div className="text-3xl font-bold text-purple-400 mb-2">4.7/5</div>
                <div className="text-xs text-slate-400">Target: ≥ 4.5/5</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
                <div className="text-xs text-purple-400 mt-1">✓ Above target</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-slate-700">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <div>
            <p>Standar: ISO 9001:2015, ISO/IEC 27002:2013, SNI 8799 (Tier 3)</p>
            <p className="text-xs mt-1">Dashboard SOP Data Center - 50 Poin Compliance & Quality Management</p>
          </div>
          <div className="text-right">
            <p className="text-cyan-400 font-medium">Status: Operational</p>
            <p className="text-xs mt-1">Last Updated: {new Date().toLocaleDateString('id-ID')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenterSOPDashboard;