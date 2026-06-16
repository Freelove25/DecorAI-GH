import { useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const userProfiles = {
  client: {
    name: "Kwame Asante",
    email: "kwame@gmail.com",
    phone: "+233 24 123 4567",
    location: "Kumasi, Ghana",
    role: "Client",
    initials: "KA",
    stats: [
      { label: "Bookings", value: "5" },
      { label: "Designs", value: "12" },
      { label: "Reviews", value: "3" },
    ],
    menu: [
      { emoji: "📋", label: "My Bookings" },
      { emoji: "🪄", label: "Saved Designs" },
      { emoji: "🏪", label: "Browse History" },
      { emoji: "🔔", label: "Notification Settings" },
      { emoji: "⚙️", label: "Edit Profile" },
      { emoji: "❓", label: "Help & Support" },
    ],
  },
  decorator: {
    name: "Akosua Mensah",
    email: "akosua@gmail.com",
    phone: "+233 20 987 6543",
    location: "Kumasi, Ghana",
    role: "Decorator",
    initials: "AM",
    stats: [
      { label: "Rating", value: "4.8⭐" },
      { label: "Bookings", value: "34" },
      { label: "Reviews", value: "28" },
    ],
    menu: [
      { emoji: "📅", label: "Booking Requests" },
      { emoji: "🖼️", label: "My Portfolio" },
      { emoji: "💰", label: "Earnings" },
      { emoji: "🔔", label: "Notification Settings" },
      { emoji: "⚙️", label: "Edit Profile" },
      { emoji: "❓", label: "Help & Support" },
    ],
  },
  shop_owner: {
    name: "Yaw Boateng",
    email: "yaw@gmail.com",
    phone: "+233 26 456 7890",
    location: "Kumasi, Ghana",
    role: "Shop Owner",
    initials: "YB",
    stats: [
      { label: "Rating", value: "4.6⭐" },
      { label: "Views", value: "124" },
      { label: "Enquiries", value: "18" },
    ],
    menu: [
      { emoji: "🏪", label: "Manage Stock" },
      { emoji: "📍", label: "Alert Radius" },
      { emoji: "💬", label: "Enquiries" },
      { emoji: "🔔", label: "Notification Settings" },
      { emoji: "⚙️", label: "Edit Profile" },
      { emoji: "❓", label: "Help & Support" },
    ],
  },
};

export default function ProfileScreen() {
  const router = useRouter();
  const [role, setRole] = useState<"client" | "decorator" | "shop_owner">(
    "client",
  );
  const profile = userProfiles[role];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Role switcher for demo */}
        <View style={styles.roleSwitcher}>
          {(["client", "decorator", "shop_owner"] as const).map((r) => (
            <TouchableOpacity
              key={r}
              style={[styles.roleBtn, role === r && styles.roleBtnActive]}
              onPress={() => setRole(r)}
            >
              <Text
                style={[
                  styles.roleBtnText,
                  role === r && styles.roleBtnTextActive,
                ]}
              >
                {r === "shop_owner"
                  ? "Shop"
                  : r.charAt(0).toUpperCase() + r.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Avatar & Info */}
        <View style={styles.profileTop}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{profile.initials}</Text>
          </View>
          <Text style={styles.name}>{profile.name}</Text>
          <View style={styles.roleBadge}>
            <Text style={styles.roleBadgeText}>{profile.role}</Text>
          </View>
          <Text style={styles.email}>{profile.email}</Text>
          <Text style={styles.phone}>{profile.phone}</Text>
          <Text style={styles.location}>📍 {profile.location}</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          {profile.stats.map((s, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statNum}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Menu */}
        <View style={styles.menuCard}>
          {profile.menu.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.menuItem,
                i < profile.menu.length - 1 && styles.menuItemBorder,
              ]}
            >
              <Text style={styles.menuEmoji}>{item.emoji}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.logoutText}>🚪 Logout</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  roleSwitcher: {
    flexDirection: "row",
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
  },
  roleBtn: { flex: 1, padding: 8, alignItems: "center", borderRadius: 10 },
  roleBtnActive: { backgroundColor: "#1B4332" },
  roleBtnText: { fontSize: 13, fontWeight: "600", color: "#666" },
  roleBtnTextActive: { color: "#fff" },
  profileTop: { alignItems: "center", paddingVertical: 20 },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#1B4332",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#B7E4C7",
  },
  avatarText: { color: "#fff", fontSize: 32, fontWeight: "bold" },
  name: { fontSize: 22, fontWeight: "800", color: "#1B4332", marginBottom: 8 },
  roleBadge: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 8,
  },
  roleBadgeText: { color: "#1B4332", fontSize: 13, fontWeight: "700" },
  email: { fontSize: 14, color: "#666", marginBottom: 4 },
  phone: { fontSize: 14, color: "#666", marginBottom: 4 },
  location: { fontSize: 13, color: "#888" },
  statsRow: {
    flexDirection: "row",
    marginHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  statNum: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1B4332",
    marginBottom: 4,
  },
  statLabel: { fontSize: 11, color: "#888", textAlign: "center" },
  menuCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  menuItemBorder: { borderBottomWidth: 1, borderBottomColor: "#F0F0F0" },
  menuEmoji: { fontSize: 20 },
  menuLabel: { flex: 1, fontSize: 15, fontWeight: "500", color: "#333" },
  menuArrow: { fontSize: 20, color: "#ccc" },
  logoutBtn: {
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffebee",
  },
  logoutText: { fontSize: 15, fontWeight: "700", color: "#c62828" },
});
