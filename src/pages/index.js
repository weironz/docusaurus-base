import React, { useState } from 'react';
import styles from './index.module.css';

const KnowledgeBaseHomepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // 知识库配置，可以轻松添加新的知识库
  const knowledgeBases = [
    {
      id: 'python',
      title: 'python',
      description: 'Python 编程语言相关文档',
      icon: '🐍',
      color: '#3B82F6',
      category: '编程语言'
    },
    {
      id: 'javascript',
      title: 'javascript',
      description: 'JavaScript 核心概念和最佳实践',
      icon: '📜',
      color: '#EAB308',
      category: '编程语言'
    },
    {
      id: 'typescript',
      title: 'typescript',
      description: 'TypeScript 类型系统和开发指南',
      icon: '📘',
      color: '#2563EB',
      category: '编程语言'
    },
    {
      id: 'golang',
      title: 'golang',
      description: 'Go 语言编程指南',
      icon: '🚀',
      color: '#06B6D4',
      category: '编程语言'
    },
    {
      id: 'java',
      title: 'java',
      description: 'Java 开发技术栈',
      icon: '☕',
      color: '#F97316',
      category: '编程语言'
    },
    {
      id: 'django',
      title: 'django',
      description: 'Django Web 框架开发',
      icon: '🌐',
      color: '#059669',
      category: 'Web框架'
    },
    {
      id: 'flask',
      title: 'flask',
      description: 'Flask 轻量级 Web 框架',
      icon: '🧪',
      color: '#4B5563',
      category: 'Web框架'
    },
    {
      id: 'vuejs',
      title: 'vuejs',
      description: 'Vue.js 前端框架',
      icon: '💚',
      color: '#10B981',
      category: 'Web框架'
    },
    {
      id: 'frontend',
      title: 'frontend',
      description: '前端开发技术和工具',
      icon: '🎨',
      color: '#EC4899',
      category: '前端开发'
    },
    {
      id: 'docker',
      title: 'docker',
      description: 'Docker 容器化技术',
      icon: '🐳',
      color: '#60A5FA',
      category: '容器化'
    },
    {
      id: 'kubernetes',
      title: 'kubernetes',
      description: 'Kubernetes 容器编排',
      icon: '⚙️',
      color: '#6366F1',
      category: '容器化'
    },
    {
      id: 'devops',
      title: 'devops',
      description: 'DevOps 实践和工具链',
      icon: '🔧',
      color: '#8B5CF6',
      category: '运维开发'
    },
    {
      id: 'database',
      title: 'database',
      description: '数据库设计和管理',
      icon: '🗄️',
      color: '#EF4444',
      category: '数据库'
    },
    {
      id: 'bigdata',
      title: 'bigdata',
      description: '大数据处理技术',
      icon: '📊',
      color: '#EA580C',
      category: '数据库'
    },
    {
      id: 'storage',
      title: 'storage',
      description: '存储技术和解决方案',
      icon: '💾',
      color: '#14B8A6',
      category: '存储'
    },
    {
      id: 'linux',
      title: 'linux',
      description: 'Linux 系统管理',
      icon: '🐧',
      color: '#374151',
      category: '操作系统'
    },
    {
      id: 'windows',
      title: 'windows',
      description: 'Windows 系统管理',
      icon: '🪟',
      color: '#1D4ED8',
      category: '操作系统'
    },
    {
      id: 'computer',
      title: 'computer',
      description: '计算机基础知识',
      icon: '💻',
      color: '#6B7280',
      category: '计算机基础'
    },
    {
      id: 'monitoring',
      title: 'monitoring',
      description: '系统监控和告警',
      icon: '📈',
      color: '#059669',
      category: '监控运维'
    },
    {
      id: 'observability',
      title: 'observability',
      description: '可观测性实践',
      icon: '👁️',
      color: '#7C3AED',
      category: '监控运维'
    },
    {
      id: 'logging',
      title: 'logging',
      description: '日志管理和分析',
      icon: '📋',
      color: '#D97706',
      category: '监控运维'
    },
    {
      id: 'ai',
      title: 'ai',
      description: '人工智能和机器学习',
      icon: '🤖',
      color: '#8B5CF6',
      category: '人工智能'
    },
    {
      id: 'virtualization',
      title: 'virtualization',
      description: '虚拟化技术',
      icon: '☁️',
      color: '#4F46E5',
      category: '虚拟化'
    },
    {
      id: 'vmware',
      title: 'vmware',
      description: 'VMware 虚拟化平台',
      icon: '🏗️',
      color: '#2563EB',
      category: '虚拟化'
    },
    {
      id: 'service-mesh',
      title: 'service-mesh',
      description: '服务网格架构',
      icon: '🕸️',
      color: '#0D9488',
      category: '微服务'
    },
    {
      id: 'message',
      title: 'message',
      description: '消息队列和通信',
      icon: '📨',
      color: '#F97316',
      category: '消息通信'
    },
    {
      id: 'tools',
      title: 'tools',
      description: '开发工具和实用程序',
      icon: '🛠️',
      color: '#4B5563',
      category: '工具'
    },
    {
      id: 'application',
      title: 'application',
      description: '应用程序开发',
      icon: '📱',
      color: '#6366F1',
      category: '应用开发'
    },
    {
      id: 'willdocs',
      title: 'willdocs',
      description: '个人文档和笔记',
      icon: '📚',
      color: '#10B981',
      category: '个人文档'
    }
  ].sort((a, b) => a.title.localeCompare(b.title));

  const filteredKnowledgeBases = knowledgeBases.filter(kb =>
    kb.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kb.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kb.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredKnowledgeBases.length / itemsPerPage);
  const paginatedKnowledgeBases = filteredKnowledgeBases.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>知识库中心</h1>
            <p className={styles.subtitle}>
              探索 {knowledgeBases.length} 个专业知识库，涵盖编程语言、框架、工具和最佳实践
            </p>
          </div>

          <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>🔍</div>
            <input
              type="text"
              placeholder="搜索知识库..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div>
          <h2 className={styles.sectionTitle}>
            {searchTerm ? `搜索结果 (${filteredKnowledgeBases.length})` : '所有知识库'}
          </h2>
          <div className={styles.cardGrid}>
            {paginatedKnowledgeBases.map((kb) => (
              <KnowledgeBaseCard key={kb.id} {...kb} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={styles.pageButton}
              >
                上一页
              </button>
              <span className={styles.pageInfo}>
                第 {currentPage} 页 / 共 {totalPages} 页
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={styles.pageButton}
              >
                下一页
              </button>
            </div>
          )}
        </div>

        {filteredKnowledgeBases.length === 0 && searchTerm && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🔍</div>
            <h3 className={styles.emptyTitle}>未找到相关知识库</h3>
            <p className={styles.emptySubtitle}>尝试使用不同的关键词搜索</p>
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{knowledgeBases.length}</div>
              <div className={styles.statLabel}>知识库</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{new Set(knowledgeBases.map(kb => kb.category)).size}</div>
              <div className={styles.statLabel}>技术领域</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>持续更新</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>💡</div>
              <div className={styles.statLabel}>最佳实践</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KnowledgeBaseCard = ({ id, title, description, icon, color, category }) => {
  const handleClick = () => {
    window.location.href = `/docs/${id}`;
  };

  return (
    <div 
      className={styles.card}
      onClick={handleClick}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <div 
            className={styles.iconContainer}
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
          <div className={styles.cardTitleContainer}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <span className={styles.categoryTag}>{category}</span>
          </div>
        </div>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardAction}>
          <span className={styles.actionText}>进入知识库</span>
          <span className={styles.actionArrow}>→</span>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseHomepage;
